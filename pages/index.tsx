import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/container/container";
import { CountryCard } from "../components/country-card/country-card";
import { CountryCards } from "../components/country-cards/country-cards";
import { Input } from "../components/input/input";
import styles from "../styles/home.module.scss";
import {
  ICountryListItem,
  ICountryReqData,
  RegionValue,
  Regions,
} from "../types";
import { useCallback, useState } from "react";
import { Select } from "../components/select/select";
import { REGIONS } from "../api/config";
import { getAllCountries } from "../api/requests";
import { Button } from "../components/button/button";
import { Status, Statuses } from "../components/status/status";

interface PageProps {
  countries: ICountryListItem[];
  error?: boolean;
}

const filterByQuery = (query: string, countries: ICountryListItem[]) =>
  countries.filter(({ name }) =>
    query === "" ? countries : name.toLowerCase().includes(query.toLowerCase())
  );

const filterByRegion = (region: string, countries: ICountryListItem[]) =>
  region === Regions.ALL
    ? countries
    : countries.filter(({ region: countryRegion }) => countryRegion === region);

const filterCountries = (
  countries: ICountryListItem[],
  filters: { query: string; region: string } = {
    query: "",
    region: Regions.ALL,
  }
) => {
  const filteredCountriesByQuery = filterByQuery(filters.query, countries);
  const filteredCountries = filterByRegion(
    filters.region,
    filteredCountriesByQuery
  );

  return filteredCountries;
};

const INITIAL_VISIBLE_AMOUNT = 50;

const Home: NextPage<PageProps> = ({ countries, error }) => {
  const [region, setRegion] = useState<RegionValue>(Regions.ALL); // TODO: add region type
  const [query, setQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_AMOUNT
  );

  const handleChangeQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    []
  );

  const handleRegionChange = useCallback((value: string) => {
    setRegion((prev) => {
      if (prev === value) return prev;

      setVisibleCount(INITIAL_VISIBLE_AMOUNT);
      return value as RegionValue;
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + INITIAL_VISIBLE_AMOUNT);
  }, []);

  const filteredCountries = filterCountries(countries, { query, region });

  const shouldShowCountries = !error && !!filteredCountries.length;
  const shouldShowEmptyMessage = !error && !filteredCountries.length;
  const shouldShowLoadMore =
    visibleCount < filteredCountries.length &&
    !!filteredCountries.length &&
    !error;

  return (
    <div className={styles.home}>
      <Head>
        <title>Rest Countries API</title>
      </Head>
      <Container>
        <div className={styles.homeInner}>
          <div className={styles.controls}>
            <div className={styles.input}>
              <Input disabled={error} onChange={handleChangeQuery} />
            </div>
            <div className={styles.filter}>
              <Select
                isDisabled={error}
                placeholder="Filter by Region"
                options={REGIONS}
                onChange={handleRegionChange}
              />
            </div>
          </div>
          <div>
            {shouldShowCountries && (
              <CountryCards>
                {filteredCountries
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .slice(0, visibleCount)
                  .map((country) => (
                    <CountryCard key={country.name} country={country} />
                  ))}
              </CountryCards>
            )}
            {shouldShowLoadMore && (
              <div className={styles.loadMore}>
                <Button onClick={handleLoadMore}>Load more</Button>
              </div>
            )}
            {shouldShowEmptyMessage && <Status type={Statuses.EMPTY} />}
            {error && <Status type={Statuses.ERROR} />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps>
> => {
  const data = await getAllCountries<ICountryReqData[]>();
  if (!Array.isArray(data)) {
    return {
      props: {
        countries: [],
        error: true,
      },
    };
  }

  const countries: ICountryListItem[] = data.map(
    ({ region, capital, population, name, flags }) => ({
      region,
      capital: capital ? capital[0] : "",
      population: population.toLocaleString(),
      name: name.common,
      flag: flags.svg,
    })
  );

  return {
    props: {
      countries,
    },
  };
};

export default Home;
