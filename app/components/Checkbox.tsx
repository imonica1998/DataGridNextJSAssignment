import React from "react";

interface CheckboxProps {
  selectAll: boolean;
  handleSelectAll: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ selectAll, handleSelectAll }) => {
  return (
    <input
      type="checkbox"
      className="cursor-pointer mr-2"
      name="Select All"
      checked={selectAll}
      onClick={handleSelectAll}
    />
  );
};

export default Checkbox;
