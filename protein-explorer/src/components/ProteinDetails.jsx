import classNames from "classnames";

import { CrossIcon, ExternalLinkIcon } from "./Icons";
import { ProteinFunctionDescription } from "./ProteinFunctionDescription";
import { Button } from "./Button";

import "../styles/protein-details.css";

export const ProteinDetails = ({ protein, onCloseClick }) => {
  return (
    <div
      className={classNames(
        "relative min-h-100 border-t border-one-offs-table-head-bottom-border-gray"
      )}
    >
      {onCloseClick && (
        <Button size="round" onClick={() => onCloseClick()}>
          <CrossIcon />
        </Button>
      )}

      <div>
        <ul className={classNames("flex flex-wrap max-w-content pt-5")}>
          <li className="mt-2">
            <div
              className={classNames("typography-descriptions text-gray mb-1.5")}
            >
              Protein name
            </div>

            <a
              href={`https://www.uniprot.org/uniprot/${protein.identifier}`}
              className="protein-details-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {protein.name}{" "}
              <ExternalLinkIcon
                width={18}
                className="relative flex-shrink-0 inline-block bottom-0.75 -ml-0.5"
              />
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
