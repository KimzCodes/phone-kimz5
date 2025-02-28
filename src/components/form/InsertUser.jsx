import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
const InsertUser = ({ insertHandler }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [nationality, setNationality] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setName("");
    setAge("");
    setLocation("");
    setNationality("");
    insertHandler({ name, age, location, nationality });
  };

  return (
    <>
      <h3>Add User</h3>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="text"
          placeholder="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <Button>Save</Button>
      </form>
    </>
  );
};

export default InsertUser;
