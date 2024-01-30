import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsCalculator from "./components/ButtonsCalculator";
import React, { useState, useEffect } from "react";

function App() {
  let [displayValue, setDisplayValue] = useState("");

  const buttonClick = (buttonName) => {
    if (buttonName === "C") {
      setDisplayValue("");
    } else if (buttonName === "=") {
      try {
        // Using a try-catch block to handle potential parsing errors
        const result = eval(displayValue);
        setDisplayValue(result.toString()); // Convert the result to a string for display
      } catch (error) {
        setDisplayValue("Error"); // Handle errors gracefully
      }
    } else {
      const newDisplayValue = displayValue + buttonName;
      setDisplayValue(newDisplayValue);
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    // Check if the pressed key is a valid button name
    const validButtonNames = [
      "C",
      "=",
      ".",
      "+",
      "-",
      "*",
      "/",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    if (validButtonNames.includes(key)) {
      buttonClick(key);
    } else if (key === "Enter") {
      // Simulate a click on the "=" button when Enter is pressed
      buttonClick("=");
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyPress);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <center>
      <div className={styles.calculatorContainer}>
        <Display displayValue={displayValue} />
        <ButtonsCalculator buttonClick={buttonClick} />
      </div>
    </center>
  );
}

export default App;
