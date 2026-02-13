import { useState } from "react";
import Selector from "./Components/Selector";
import DateRange from "./Components/DateRange";
import ToggleableButton from "./Components/ToggleableButton";

import "./App.css";
import CommandButton from "./Components/CommandButton";

function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [toggleChartTable, setToggleChartTable] = useState(true);

  const Reset = () => {
    setStartDate(null);
    setEndDate(null);
    toggleChartTable && setToggleChartTable(false);
  };

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
        <CommandButton text="Reset" onClick={Reset} />
      </div>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <ToggleableButton
        trueText="Table View"
        falseText="Chart View"
        buttonState={toggleChartTable}
        onClick={() => setToggleChartTable(!toggleChartTable)}
      />
    </>
  );
}

export default App;
