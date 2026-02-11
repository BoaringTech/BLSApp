import { type ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: Props) {
  let [buttonState, setButtonState] = useState(true);

  return (
    <button
      className={buttonState ? "btn btn-primary" : "btn btn-" + color}
      onClick={() => {
        setButtonState(!buttonState);
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
