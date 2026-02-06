import Selector from "./Components/Selector";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <h1>BLS Data Visualizer</h1>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 3, marginTop: 3 }}
      >
        <Selector
          items={[
            "Unemployment Rate over time",
            "Software Engineer job count",
            "Software Engineer job in Florida",
          ]}
        />
      </div>
    </>
  );
}

export default App;
