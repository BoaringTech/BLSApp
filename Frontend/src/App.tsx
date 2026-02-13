//import Selector from "./Components/Selector";
import "./App.css";
import DisplayWeatherForecast from "./Components/DisplayWeatherForecast";

function App() {
  //const [alertVisible, setAlertVisible] = useState(false);

  return (
    <DisplayWeatherForecast />

    // Temporary to test fetching data from the backend, will remove later
    // <>
    //   <h1 className="container-sm">BLS Data Visualizer</h1>
    //   <div
    //     style={{ display: "flex", flexDirection: "row", gap: 3, marginTop: 3 }}
    //   >
    //     <Selector
    //       items={[
    //         "Unemployment Rate over time",
    //         "Software Engineer job count",
    //         "Software Engineer job in Florida",
    //       ]}
    //     />
    //   </div>
    // </>
  );
}

export default App;
