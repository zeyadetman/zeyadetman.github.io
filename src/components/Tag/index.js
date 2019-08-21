import React from "react";
import styles from "./styles.module.scss";

export default function Tag({ value, type }) {
  return (
    <div className={styles.tag}>
      <span className={styles[type]}>{value}</span>
    </div>
  );
}
