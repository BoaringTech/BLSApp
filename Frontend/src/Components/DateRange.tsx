import DateSelect from "./DataSelect";

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
}

// This component is used to select a date range. It is used in the App component.
function DateRange({ startDate, endDate, setStartDate, setEndDate }: Props) {
  if (!startDate) {
    setStartDate(GetDateFiveYearsAgo()); // Default to 5 years ago
  }

  if (!endDate) {
    setEndDate(GetCurrentDate()); // Default to current date
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
      <label>Date Range:</label>
      <DateSelect dateSelected={startDate} setDate={setStartDate} />
      <DateSelect dateSelected={endDate} setDate={setEndDate} />
    </div>
  );
}

function GetCurrentDate() {
  return new Date();
}

function GetDateFiveYearsAgo() {
  return new Date(new Date().setFullYear(new Date().getFullYear() - 5));
}

export default DateRange;
