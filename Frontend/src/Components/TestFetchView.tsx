import { useState } from "react";
import { fetchBLSData } from "../functions/FetchBLSData";
import "../Styles/Button.css";

interface props {
  setNormalView: (normalView: boolean) => void;
}

// Component to pass API urls to fetch from the BLS API and then shows if the fetch was successful or not.
// Used for testing the API connection and functionality.
function TestFetchView({ setNormalView }: props) {
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const reset = () => {
    setOutput("");
    setInput("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 8,
        }}
      >
        <button
          style={{ margin: 0 }}
          className="btn btn-light"
          onClick={() =>
            fetchBLSData(input).then((result) => setOutput(result.toString()))
          }
        >
          Fetch Data
        </button>
        <button
          style={{ margin: 0 }}
          className="btn btn-light"
          onClick={() => {
            reset();
            setNormalView(true);
          }} // Clean up text fields and return to normal view
        >
          Back
        </button>
        <text style={{ margin: 0 }}>Status: {output}</text>
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
    </>
  );
}

export default TestFetchView;
