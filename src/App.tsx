import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nilma", "Saku", "Kandy", "Kalutara"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
