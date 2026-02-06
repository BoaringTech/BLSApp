interface Props {
  items: string[];
}

function Selector({ items }: Props) {
  return (
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      {items.map((item, index) => (
        <option value={index}>{item}</option>
      ))}
    </select>
  );
}

export default Selector;
