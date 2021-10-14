import { useState } from "react";

import classNames from "classnames";
import { PanelDotList } from "./PanelDotList";
import { ProteinDetails } from "./ProteinDetails";
import { ArrowIcon } from "./Icons/ArrowIcon";
import { Table } from "./Table";

import "../styles/protein-list.css";

export const ProteinList = ({ proteins }) => {
  const [expandedUniProtId, setExpandedUniProtId] = useState();

  const tableColumns = [
    {
      key: "identifier",
      label: "UniProt ID",
      className: "width: 20%",
      formatter: (protein) => (
        <div className="relative">
          <ArrowIcon
            direction="down"
            className={classNames(
              "protein-list-arrow",
              protein.identifier === expandedUniProtId &&
                "protein_list_expanded_uniprot_id",
              protein.identifier !== expandedUniProtId &&
                "protein_list_deflated_uniprot_id"
            )}
          />
          {protein.identifier}
        </div>
      ),
    },
    {
      key: "gene",
      label: "Gene",
      className: "w-3/5",
    },
    {
      key: "panels",
      label: "Panels",
      className: "is-aligned-middle hover:z-10 w-1/5",
      formatter: (protein) => {
        return protein && protein.panels && protein.panels.length > 0 ? (
          <PanelDotList panels={protein.panels} />
        ) : null;
      },
    },
  ];

  return (
    <div>
      {proteins.length === 0 && <p>No proteins in pathway.</p>}
      {proteins.length > 0 && (
        <Table
          rows={proteins.map((protein) => ({
            identifier: protein.identifier,
            name: protein.name,
            gene: protein.gene,
            panels: protein.panels,
            function_descriptions: protein.function_descriptions,
            className:
              protein.identifier === expandedUniProtId &&
              "table-row-is-highlighted table-row-has-expanded-protein-details",
            protein,
          }))}
          columns={tableColumns}
          onRowClick={(row) => {
            if (row.identifier === expandedUniProtId) {
              setExpandedUniProtId(undefined);
            } else {
              setExpandedUniProtId(row.identifier);
            }
          }}
          renderPostRow={(protein) => {
            if (protein.identifier === expandedUniProtId) {
              return (
                <tr className="table-row-is-highlighted table-row-contains-protein-details">
                  <td colSpan={100}>
                    <ProteinDetails
                      protein={protein}
                      onCloseClick={() => setExpandedUniProtId(undefined)}
                    />
                  </td>
                </tr>
              );
            }

            return null;
          }}
        />
      )}
    </div>
  );
};
