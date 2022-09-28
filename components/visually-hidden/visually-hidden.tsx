import React from "react";
import styles from "./styles.module.scss";

interface VisuallyHiddenProps<T extends React.ElementType> {
  as?: T;
  children: React.ReactNode;
}

export function VisuallyHidden<T extends React.ElementType = "span">({
  children,
  as,
}: VisuallyHiddenProps<T>) {
  const Tag = as ?? "span";
  return <Tag className={styles.visuallyHidden}>{children}</Tag>;
}
