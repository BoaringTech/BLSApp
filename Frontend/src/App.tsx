import { useState } from "react";
import Selector from "./Components/Selector";
import DateRange from "./Components/DateRange";
import ToggleableButton from "./Components/ToggleableButton";

import "./App.css";
import CommandButton from "./Components/CommandButton";
import GraphView from "./Components/GraphView";

function App() {
  // State variables for each of the components. These are used to store the user's selections and input.
  const [jobsSelected, setJobsSelected] = useState(0);
  const [dataOptionSelected, setDataOptionSelected] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [toggleTableView, setToggleTableView] = useState(true);

  const Reset = () => {
    setDataOptionSelected(0);
    setStartDate(null);
    setEndDate(null);
    toggleTableView && setToggleTableView(false);
  }; // Resets all the state to default values

  return (
    <>
      <h1 className="container-sm">BLS Data Visualizer</h1>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 3, marginTop: 3 }}
      >
        <Selector
          indexSelected={jobsSelected}
          setIndexSelected={setJobsSelected}
          items={["Software Engineer", "Data Scientist", "Civil Engineer"]}
        />
        <Selector
          indexSelected={dataOptionSelected}
          setIndexSelected={setDataOptionSelected}
          items={[
            "Unemployment Rate over time",
            "Job Count",
            "Job Count in Florida",
          ]}
        />
        <CommandButton text="Reset" onClick={Reset} />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 3, marginTop: 3 }}
      >
        <DateRange
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <ToggleableButton
          falseText="Chart View"
          trueText="Table View"
          buttonState={toggleTableView}
          onClick={() => setToggleTableView(!toggleTableView)}
        />
      </div>
      <GraphView />
    </>
  );
}

export default App;
