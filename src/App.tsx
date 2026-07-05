import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility]= useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)} >My new alert</Alert>}
      <Button color = 'primary' onClick={()=> setAlertVisibility(true)}>My  new Button</Button>
    </div>
  );
}
export default App;
