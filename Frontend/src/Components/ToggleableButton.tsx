import { useState } from "react";

interface Props {
  falseText: string;
  trueText: string;
  buttonState: boolean;
  onClick: () => void;
}

function ToggleableButton({
  falseText,
  trueText,
  buttonState,
  onClick,
}: Props) {
  return (
    <button className="btn btn-light" onClick={onClick}>
      {buttonState ? trueText : falseText}
    </button>
  );
}

export default ToggleableButton;
