import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface BordersProps {
  borders: string[];
}

export const Borders: React.FunctionComponent<BordersProps> = ({ borders }) => (
  <div className={styles.bordersContainer}>
    <div className={styles.bordersTitle}>Border Countries: </div>
    <ul className={styles.bordersList} role="list">
      {borders.map((border) => (
        <li className={styles.bordersItem} key={border}>
          <Link href={`/country/${border.toLowerCase()}`}>
            <a>{border}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
