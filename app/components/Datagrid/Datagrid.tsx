import { useState, useEffect, createContext, useContext } from "react";
import { getDataFromMockApi } from "../../data/mockApi";
import {
  TableRowWithCheckbox,
  GridOperationsWidgetContext,
} from "../../types/TableDataType";
import Status from "../StatusWidget";
import GridHeader from "../GridHeader";
import GridOperationsWidget from "../GridOperationsWidget";
const tableHeaders = ["", "Name", "Device", "Path", "Status"];
export const DataGridContext = createContext<
  GridOperationsWidgetContext | undefined
>(undefined);

export const useSelectionContext = (): GridOperationsWidgetContext => {
  const context = useContext(DataGridContext);
  if (!context) {
    throw new Error(
      "useSelectionContext must be used within a SelectionProvider"
    );
  }
  return context;
};
const DataGrid = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [enableDownload, setEnableDownload] = useState(false);
  const [totalSelectedCount, setTotalSelectedCount] = useState(0);
  const [apiData, setApiData] = useState<TableRowWithCheckbox[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataFromMockApi();
      setApiData(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    checkIfValidForDownload();
  }, [apiData]);
  const handleSelectAll = (): void => {
    setSelectAll((prevState) => {
      const newState = !prevState;
      const updatedData: TableRowWithCheckbox[] = apiData.map((row) => ({
        ...row,
        checked: newState,
      }));
      setApiData(updatedData);
      setTotalSelectedCount(newState ? updatedData.length : 0);
      return newState;
    });
  };

  const handleRowClicked = (name: string) => {
    const updatedData: TableRowWithCheckbox[] = apiData.map((row) => {
      if (row.name === name) {
        setTotalSelectedCount((prevCount) => {
          return !row.checked ? prevCount + 1 : prevCount - 1;
        });
        return { ...row, checked: !row.checked };
      }
      return row;
    });
    setApiData(updatedData);
  };

  const handleDownloadClick = () => {
    if (checkIfValidForDownload()) {
      const downloadStream = JSON.stringify(
        apiData.filter((row) => {
          return row.status === "available" && row.checked;
        })
      );
      alert(downloadStream);
    }
  };

  const checkIfValidForDownload = () => {
    let isValid = false;
    for (const row of apiData) {
      if (row.status === "available" && row.checked) {
        isValid = true;
      }
      if (row.status === "scheduled" && row.checked) {
        isValid = false;
        break;
      }
    }
    setEnableDownload(isValid);
    return isValid;
  };

  const selectionStatus =
    totalSelectedCount === 0
      ? "None Selected"
      : totalSelectedCount === apiData.length
      ? "All Selected"
      : `${totalSelectedCount} Selected`;

  return (
    <div className="flex flex-col mx-10 my-4 shadow-lg p-4 justify-center border-separate border border-gray-400">
      <DataGridContext.Provider
        value={{
          selectAll,
          handleSelectAll,
          selectionStatus,
          handleDownloadClick,
          enableDownload,
        }}
      >
        <GridOperationsWidget />
      </DataGridContext.Provider>
      <table>
        <GridHeader tableHeaders={tableHeaders} />
        <tbody>
          {apiData &&
            apiData.map((row: TableRowWithCheckbox, index: number) => (
              <tr key={`row-${index}`}>
                <td className="border border-gray-300 p-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    name={row.name}
                    checked={row.checked}
                    onClick={() => handleRowClicked(row.name)}
                  />
                </td>
                <td className="border border-gray-300 p-3">{row.name}</td>
                <td className="border border-gray-300 p-3">{row.device}</td>
                <td className="border border-gray-300 p-3">{row.path}</td>
                <td className="border border-gray-300 p-3">
                  <Status statusCode={row.status} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
