import { useState } from "react";
import Selector from "./Components/Selector";
import DateRange from "./Components/DateRange";
import ToggleableButton from "./Components/ToggleableButton";
import CommandButton from "./Components/CommandButton";
import GraphView from "./Components/GraphView";
import SwitchView from "./Components/SwitchView";
import TableView from "./Components/TableView";

import "./App.css";

function App() {
  // State variables for each of the components. These are used to store the user's selections and input.
  const [jobsSelected, setJobsSelected] = useState(0);
  const [dataOptionSelected, setDataOptionSelected] = useState(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [toggleTableView, setToggleTableView] = useState(false);

  const Reset = () => {
    setJobsSelected(0);
    setDataOptionSelected(0);
    setStartDate(null);
    setEndDate(null);
    toggleTableView && setToggleTableView(false);
  }; // Resets all the state to default values

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1 className="container-sm">BLS Data Visualizer</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignContent: "center",
          width: "100%",
        }}
      >
        <Selector
          defaultText="Select job(s) to view"
          indexSelected={jobsSelected}
          setIndexSelected={setJobsSelected}
          items={["Software Engineer", "Data Scientist", "Civil Engineer"]}
          className="selectJob"
        />
        <Selector
          defaultText="Select data to view"
          indexSelected={dataOptionSelected}
          setIndexSelected={setDataOptionSelected}
          items={[
            "Unemployment Rate over time",
            "Job Count",
            "Job Count in Florida",
          ]}
          className="selectData"
        />
        <CommandButton text="Reset" onClick={Reset} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignContent: "center",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <DateRange
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          className="dataRange"
        />
        <ToggleableButton
          falseText="Chart View"
          trueText="Table View"
          buttonState={toggleTableView}
          onClick={() => setToggleTableView(!toggleTableView)}
        />
        <CommandButton
          text="Fetch Data"
          onClick={() => {
            fetch("https://localhost:5000/fetch");
          }}
        />
      </div>
      <div style={{ width: "100%", height: "500px" }}>
        <SwitchView
          state={toggleTableView}
          defaultView={GraphView()}
          alternateView={TableView()}
        />
      </div>
    </div>
  );
}

export default App;
