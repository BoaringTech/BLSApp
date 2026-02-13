import { useState } from "react";
import Selector from "./Components/Selector";
import DateRange from "./Components/DateRange";

import "./App.css";

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <>
      <h1 className="container-sm">BLS Data Visualizer</h1>
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
      <DateRange
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </>
  );
}

export default App;
