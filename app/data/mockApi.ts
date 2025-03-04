import { TableRowWithCheckbox, Status } from "../types/TableDataType";
import jsonData from "./mockData.json";

export const getDataFromMockApi = async () => {
  const tableDataWithCheckbox: TableRowWithCheckbox[] = jsonData.map((row) => ({
    ...row,
    status: <Status>row.status,
    checked: false,
  }));

  return tableDataWithCheckbox;
};
