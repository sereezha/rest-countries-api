import classNames from "classnames";
import React from "react";
import { Search } from "../icons";
import styles from "./styles.module.scss";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const Input: React.FunctionComponent<InputProps> = ({
  placeholder = "Search for a country...",
  disabled,
  ...restProps
}) => {
  const classes = classNames(styles.input, {
    [styles.inputDisabled]: disabled,
  });

  return (
    <div className={classes}>
      <div className={styles.icon}>
        <Search size="100%" />
      </div>
      <input
        {...restProps}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        inputMode="search"
        className={styles.inputField}
      />
    </div>
  );
};
