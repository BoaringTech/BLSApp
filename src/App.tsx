import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Click me!</Button>
    </div>
  );
}

export default App;
