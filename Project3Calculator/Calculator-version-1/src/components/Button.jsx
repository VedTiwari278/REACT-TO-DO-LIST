import styles from "./Button.module.css";
const Button = ({ onButtonClick }) => {
  const buttonNames = [
    "AC",
    "(",
    ")",
    "%",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "=",
    "0",
    ".",
    "/",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Button;
