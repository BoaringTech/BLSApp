import { type ReactNode } from "react";

interface Props {
  state: boolean;
  defaultView: ReactNode;
  alternateView: ReactNode;
}

function SwitchView({ state, defaultView, alternateView }: Props) {
  return state ? alternateView : defaultView;
}

export default SwitchView;
