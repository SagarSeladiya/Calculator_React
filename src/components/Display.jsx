import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <>
      <div className={styles.displayOuter}>
        <input
          type="text"
          className={styles.inputField}
          value={displayValue}
          readOnly
        />
      </div>
    </>
  );
}

export default Display;
