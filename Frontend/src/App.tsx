import { useState } from "react";

import "./App.css";
import NormalView from "./Components/NormalView";
import TestFetchView from "./Components/TestFetchView";

function App() {
  const [normalView, setNormalView] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1 className="container-sm">BLS Data Visualizer</h1>
      {normalView ? (
        <NormalView setNormalView={setNormalView} />
      ) : (
        <TestFetchView setNormalView={setNormalView} />
      )}
    </div>
  );
}

export default App;
