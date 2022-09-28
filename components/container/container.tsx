import React from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};
