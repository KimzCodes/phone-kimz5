import Button from "../ui/Button";
import styles from "./styles.module.css";

const Card = ({
  id,
  name,
  age,
  gender,
  location,
  nationality,
  deleteHandler,
}) => {
  return (
    <div className={styles.card}>
      <p style={{ fontWeight: "bold", color: "red" }}>Name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
      <p>location: {location}</p>
      <p>nationality: {nationality}</p>
      <Button
        styles={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "red",
        }}
        onClick={() => deleteHandler(id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Card;
