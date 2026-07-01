import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Nilma", "Saku", "Kandy", "Kalutara"];

  //event handler
  const handleClicked = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClicked}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
