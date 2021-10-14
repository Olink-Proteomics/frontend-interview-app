import classNames from "classnames";

import { CrossIcon, ExternalLinkIcon } from "./Icons";
import { ProteinFunctionDescription } from "./ProteinFunctionDescription";
import { Button } from "./Button";

import "../styles/protein-details.css";

export const ProteinDetails = ({ protein, onCloseClick }) => {
  return (
    <div className="protein-details-main">
      {onCloseClick && (
        <Button size="round" onClick={() => onCloseClick()}>
          <CrossIcon />
        </Button>
      )}

      <div>
        <ul className="protein-details-list">
          <li className="mt-2">
            <div className="protein-details-head">Protein name</div>

            <a
              href={`https://www.uniprot.org/uniprot/${protein.identifier}`}
              className="protein-details-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {protein.name}{" "}
              <ExternalLinkIcon width={18} className="protein-details-link" />
            </a>
          </li>
        </ul>

        <ProteinFunctionDescription
          protein={protein}
          className="typography-body-regular"
        />

        <div className={classNames("mb-4")}></div>
      </div>
    </div>
  );
};
