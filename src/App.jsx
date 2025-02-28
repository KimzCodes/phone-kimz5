import { useState } from "react";
import Container from "./components/container/Container";
import CardList from "./components/card/CardList";
import InsertUser from "./components/form/InsertUser";

const App = () => {
  const [names, setName] = useState([
    {
      id: 1,
      name: "kareem",
      age: "36",
      location: "giza",
      nationality: "egyptian",
    },
    {
      id: 2,
      name: "fara",
      age: "30",
      location: "giza",
      nationality: "egyptian",
    },
    {
      id: 3,
      name: "mohamed",
      age: "25",
      location: "giza",
      nationality: "egyptian",
    },
    {
      id: 4,
      name: "ahmed",
      age: "25",
      location: "cairo",
      nationality: "egyptian",
    },
  ]);

  const deleteUserHandler = (id) => {
    const deleteData = names.filter((el) => el.id !== id);
    setName(deleteData);
  };

  const insertUserHandler = (data) => {
    data.id = new Date();
    setName([...names, data]);
  };

  return (
    <Container style={{ backgroundColor: "#fae387" }}>
      <InsertUser insertHandler={insertUserHandler} />
      <CardList list={names} deleteHandler={deleteUserHandler} />
    </Container>
  );
};

export default App;
