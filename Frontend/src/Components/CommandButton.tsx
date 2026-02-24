import "../Styles/Button.css";

interface Props {
  text: string;
  onClick: () => void;
}

function CommandButton({ text, onClick }: Props) {
  return (
    <button className="btn btn-light" onClick={onClick}>
      {text}
    </button>
  );
}

export default CommandButton;
