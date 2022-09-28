import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ICountryListItem } from "../../types";
import Link from "next/link";
import { VisuallyHidden } from "../visually-hidden/visually-hidden";

interface CountryCardProps {
  country: ICountryListItem;
}

export const CountryCard: React.FunctionComponent<CountryCardProps> = ({
  country,
}) => {
  const { name, region, population, capital, flag } = country;

  return (
    <div className={styles.countryCard}>
      <Link href={`/country/${name.toLowerCase()}`}>
        <a className={styles.link}>
          <VisuallyHidden>
            <span>Learn more</span>
          </VisuallyHidden>
        </a>
      </Link>
      <div className={styles.image}>
        <Image
          objectFit="cover"
          layout="fill"
          src={flag}
          alt={`Flag of ${name}`}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>
          <div>
            <span className={styles.title}>Population:</span> {population}
          </div>{" "}
          <div>
            <span className={styles.title}>Region:</span> {region}
          </div>
          {capital && (
            <div>
              <span className={styles.title}>Capital:</span> {capital}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
