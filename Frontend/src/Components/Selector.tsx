import React from "react";
import "../Styles/selector.css";

interface Props {
  defaultText: string;
  indexSelected: number;
  setIndexSelected: (index: number) => void;
  items: string[];
}

function Selector({
  defaultText,
  indexSelected,
  setIndexSelected,
  items,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndexSelected(event.target.selectedIndex);
  };

  return (
    <select
      className="form-select"
      aria-label="Default select example"
      value={indexSelected}
      onChange={handleChange}
    >
      <option selected value={0}>
        {defaultText}
      </option>
      {items.map((item, index) => (
        <option value={index + 1}>{item}</option> // start with 1 since 0 is the default option
      ))}
    </select>
  );
}

export default Selector;
