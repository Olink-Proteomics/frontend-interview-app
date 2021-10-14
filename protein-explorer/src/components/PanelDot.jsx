import classNames from "classnames";

import "../styles/panel-dot.css";

export const PanelDot = ({ panel }) => (
  <div className={classNames("panel-dot", `panel-dot-color-${panel.color}`)} />
);
