import styles from "./Display.module.css";
const Display = ({ dispalyVal }) => {
  return (
    <>
      <input 
        type="text" 
        className={styles.display}
        value={dispalyVal}
        readOnly
      />
    </>
  );
};
export default Display;
