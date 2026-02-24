import React from "react";
import "../Styles/selector.css";

interface Props {
  defaultText: string;
  indexSelected: number;
  setIndexSelected: (index: number) => void;
  items: string[];
  className?: string;
}

function Selector({
  defaultText,
  indexSelected,
  setIndexSelected,
  items,
  className,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIndexSelected(event.target.selectedIndex);
  };

  return (
    <select
      className={"form-select" + (className ? " " + className : "")}
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
