import Checkbox from "./Checkbox";
import { useSelectionContext } from "./Datagrid/Datagrid";
const GridOperationsWidget = () => {
  const {
    selectAll,
    handleSelectAll,
    selectionStatus,
    handleDownloadClick,
    enableDownload,
  } = useSelectionContext();
  return (
    <div className="flex items-center mb-2">
      <div>
        <Checkbox selectAll={selectAll} handleSelectAll={handleSelectAll} />
        {selectionStatus}
      </div>
      <div className="ml-3">
        <button
          className="bg-indigo-600 hover:not-focus:bg-indigo-700 px-2 py-1 text-white rounded-md disabled:opacity-75"
          onClick={handleDownloadClick}
          disabled={!enableDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default GridOperationsWidget;
