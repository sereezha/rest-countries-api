import React from "react";
import { ButtonBase, ButtonBaseProps } from "../button-base/button-base";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonBaseProps {
  icon?: React.ReactNode;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, icon, ...restProps } = props;

  return (
    <ButtonBase className={styles.button} {...restProps}>
      {icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </ButtonBase>
  );
};
