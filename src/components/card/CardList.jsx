import Card from "./Card";
const CardList = ({ list, deleteHandler }) => {
  const cardList = list.map((el) => (
    <Card key={el.id} {...el} deleteHandler={deleteHandler} />
  ));

  return (
    <div>
      <h3>Names List</h3>
      {cardList}
    </div>
  );
};

export default CardList;
