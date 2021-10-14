import classNames from "classnames";

import { PanelDot } from "./PanelDot";

export const PanelDotList = ({ panels = {} }) => (
  <div className={classNames(`panel-dot-list`)}>
    <ul className="panel-dot-list-panel">
      {Array.from(panels).map((panel, index) => (
        <li key={index}>
          <div className="panel-dot-list-wrapper">
            <PanelDot panel={panel} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);
