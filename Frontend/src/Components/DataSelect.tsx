import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  dateSelected: Date | null;
  setDate: (date: Date | null) => void;
}

// This component is used to select a date. It is used in the DateRange component.
function DateSelect({ dateSelected, setDate }: Props) {
  return (
    <DatePicker
      selected={dateSelected}
      onSelect={(date) => {
        setDate(date);
      }}
    />
  );
}

export default DateSelect;
