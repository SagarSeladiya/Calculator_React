import React from "react";
import styles from "./ButtonsCalculator.module.css";

export default function ButtonsCalculator({ buttonClick }) {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => (
        <button
          className={styles.buttons}
          onClick={() => buttonClick(buttonName)}
          key={buttonName}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}
