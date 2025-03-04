import React from "react";

interface GridHeaderProps {
    tableHeaders: string[];
}

const GridHeader: React.FC<GridHeaderProps> = ({ tableHeaders }) => {
  return (
    <thead>
    <tr>
      {tableHeaders.map((header, index: number) => (
        <th className="border border-gray-300 p-3" key={`header-${index}`}>{header}</th>
      ))}
    </tr>
  </thead>
  );
};

export default GridHeader;
