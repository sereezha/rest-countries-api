import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { Container } from "../../components/container/container";
import styles from "../../styles/country.module.scss";
import { ButtonBase } from "../../components/button-base/button-base";
import { components } from "../../features/country-page/";
import {
  getAllCountries,
  getCountryByAlphaCode,
  getCountryByName,
} from "../../api/requests";
import { ICountry, ICountryInfo, ICountryReqData } from "../../types";
import { ParsedUrlQuery } from "querystring";
import { Info } from "../../features/country-page/components/info/info";
import { CallMade } from "../../components/icons";
import { Button } from "../../components/button/button";

const { Borders } = components;

interface PageProps {
  country: ICountry;
}

const CountryPage: React.FunctionComponent<PageProps> = ({ country }) => {
  const {
    flag,
    name,
    currencies,
    languages,
    population,
    region,
    capital,
    subregion,
    borders = [],
    domains = null,
  } = country;
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const info: ICountryInfo = {
    population,
    region,
    subregion,
    capital,
    domains,
    currencies,
    languages,
  };

  return (
    <div className={styles.countryPage}>
      <Head>
        <title>{`${name} - Rest Countries API`}</title>
      </Head>
      <Container>
        <div className={styles.button}>
          <Button onClick={handleBackClick} icon={<CallMade size="100%" />}>
            Back
          </Button>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image layout="fill" objectFit="cover" src={flag} alt="Flag" />
          </div>
          <div className={styles.about}>
            <h1 className={styles.title}>{name}</h1>
            <Info info={info} />
            {borders?.length > 0 && <Borders borders={borders} />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await getAllCountries<ICountryReqData[]>();
  const paths = !!countries?.length
    ? countries.map((country) => ({
        params: { name: country.name.common.toLowerCase() },
      }))
    : [];

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
): Promise<GetStaticPropsResult<PageProps>> => {
  const data = await getCountryByName<ICountryReqData[]>(context.params!.name);

  const {
    name,
    population,
    region,
    capital = null,
    currencies,
    subregion = null,
    languages,
    flags,
    borders,
    tld: domains,
  } = data[0];

  let borderCountries: string[] = [];

  if (borders) {
    const bordersPromise = borders.map(async (code: string) =>
      getCountryByAlphaCode<ICountryReqData[]>(code)
    );

    const bordersData = await Promise.all(bordersPromise);
    borderCountries = bordersData.map((country) => country[0].name.common);
  }

  const country = {
    name: name.official,
    population: population.toLocaleString(),
    region,
    capital: capital ? capital.join(", ") : null,
    subregion,
    currencies: currencies
      ? Object.values(currencies)
          .map(({ name }) => name)
          .join(", ")
      : null,
    languages: languages ? Object.values(languages).join(", ") : null,
    flag: flags.svg,
    borders: borderCountries,
    domains: domains ? domains.join(", ") : null,
  };

  return {
    props: {
      country,
    },
  };
};

export default CountryPage;
