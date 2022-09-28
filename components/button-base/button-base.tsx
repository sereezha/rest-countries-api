import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ButtonBase: React.FunctionComponent<ButtonBaseProps> = (props) => {
  const { className, children, ...restProps } = props;

  const classes = classNames(styles.button, className);

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};
