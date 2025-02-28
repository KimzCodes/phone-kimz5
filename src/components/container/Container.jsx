import styles from "./styles.module.css";
const Container = ({ style, children }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
