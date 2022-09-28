import classNames from "classnames";
import React from "react";
import { Empty, Error } from "../icons";
import styles from "./styles.module.scss";

export enum Statuses {
  ERROR = "error",
  EMPTY = "empty",
}

const getIcon = (status: Statuses): React.ReactNode => {
  const map = {
    [Statuses.ERROR]: <Error size="30" />,
    [Statuses.EMPTY]: <Empty />,
  };

  return map[status] ?? <Empty />;
};

const getMessage = (status: Statuses) => {
  const map = {
    [Statuses.ERROR]: "Something wrong happened, please, try again later!",
    [Statuses.EMPTY]: "Ooops, probably this country does not exist!",
  };

  return map[status];
};

interface StatusProps {
  type: Statuses;
  message?: string;
}

export const Status: React.FunctionComponent<StatusProps> = (props) => {
  const { type, message } = props;
  const msg = message ?? getMessage(type);

  const classes = classNames(styles.status, {
    [styles.error]: type === Statuses.ERROR,
    [styles.empty]: type === Statuses.EMPTY,
  });

  return (
    <div className={classes}>
      <div className={styles.icon}>{getIcon(type)}</div>
      {msg}
    </div>
  );
};
