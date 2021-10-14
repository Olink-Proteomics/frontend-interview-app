import { useState } from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";

import "../styles/table.css";

const Head = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column) => (
        <th
          className={classNames("table-head", column.className)}
          key={String(column.key)}
        >
          {column.label}
        </th>
      ))}
    </tr>
  </thead>
);

function Row({ data, columns, onClick, renderPostRow }) {
  const { className: rowClassName } = data;

  return (
    <>
      <tr
        className={classNames(rowClassName, { "cursor-pointer": onClick })}
        onClick={() => typeof onClick === "function" && onClick(data)}
      >
        {columns.map((column) => (
          <td key={String(column.key)} className={column.className}>
            {(column.formatter && column.formatter(data)) ?? data[column.key]}
          </td>
        ))}
      </tr>
      {renderPostRow && renderPostRow(data)}
    </>
  );
}

export function Table(props) {
  const {
    rows,
    columns,
    className,
    onRowClick,
    renderPostRow,
    withRowBorders = false,
    withMarginBetweenHeadAndBody = true,
    ...restProps
  } = props;
  const [tableId] = useState(nanoid());

  return (
    <div className="table-container">
      <table
        id={tableId}
        className={classNames(
          "table",
          withRowBorders && `table-with-row-borders`,
          withMarginBetweenHeadAndBody &&
            `table-with-margin-between-head-and-body`,
          className
        )}
        {...restProps}
      >
        <Head columns={columns} />

        <tbody>
          {rows.map((row) => (
            <Row
              key={row.identifier}
              data={row}
              columns={columns}
              onClick={onRowClick}
              renderPostRow={renderPostRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
