import styles from "./App.module.css";
import Display from "./components/display";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display dispalyVal={calVal}></Display>
        <Button onButtonClick={onButtonClick}></Button>
      </div>
    </>
  );
}

export default App;
