import style from "./styles.module.css";

const Button = ({ styles, children, onClick }) => {
  return (
    <button style={styles} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
