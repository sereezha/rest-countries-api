import Link from "next/link";
import React from "react";
import { useTheme } from "../../context/theme";
import { ButtonBase } from "../button-base/button-base";
import { Container } from "../container/container";
import { Moon } from "../icons";
import styles from "./styles.module.scss";

export const Header: React.FunctionComponent = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>
            <Link href="/">
              <a>Where in the world?</a>
            </Link>
          </h1>
          <ButtonBase onClick={toggleTheme} className={styles.button}>
            <div className={styles.iconMoon}>
              <Moon size="100%" stroke="inherit" fill="inherit" />
            </div>
            Dark Mode
          </ButtonBase>
        </div>
      </Container>
    </header>
  );
};
