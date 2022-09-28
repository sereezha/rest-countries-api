import React from "react";
import styles from "./styles.module.scss";

interface CountryCardsProps {
  children: React.ReactNode;
}

export const CountryCards: React.FunctionComponent<CountryCardsProps> = ({
  children,
}) => {
  return <div className={styles.countryCards}>{children}</div>;
};
