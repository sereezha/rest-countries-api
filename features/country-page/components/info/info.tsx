import React from "react";
import { ICountry, ICountryInfo } from "../../../../types";
import styles from "./styles.module.scss";

interface InfoProps {
  info: ICountryInfo;
}

export const Info: React.FunctionComponent<InfoProps> = ({ info }) => {
  const {
    population,
    region,
    subregion,
    capital,
    domains,
    currencies,
    languages,
  } = info;
  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <span className={styles.infoTitle}>Native Name:</span> <br />
        <span className={styles.infoTitle}>Population:</span> {population}
        <br />
        <span className={styles.infoTitle}>Region:</span> {region} <br />
        {subregion && (
          <>
            <span className={styles.infoTitle}>Sub Region:</span> {subregion}{" "}
            <br />
          </>
        )}
        {capital && (
          <>
            <span className={styles.infoTitle}>Capital:</span> {capital}
          </>
        )}
      </div>
      <div className={styles.infoItem}>
        {domains && (
          <>
            <span className={styles.infoTitle}>Top Level Domain:</span>{" "}
            {domains}
          </>
        )}
        <br />
        {currencies && (
          <>
            <span className={styles.infoTitle}>Currencies:</span> {currencies}
          </>
        )}
        <br />
        {languages && (
          <>
            <span className={styles.infoTitle}>Languages:</span> {languages}
          </>
        )}
      </div>
    </div>
  );
};
