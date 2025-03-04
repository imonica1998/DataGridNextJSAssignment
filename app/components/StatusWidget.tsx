import { Status } from "../types/TableDataType";
import React from "react";
interface StatusWidgetProps {
  statusCode: Status;
}
const StatusMap = {
  available: "Available",
  scheduled: "Scheduled",
};
const StatusWidget: React.FC<StatusWidgetProps> = ({ statusCode }) => {
  return (
    <span>
      <span className={`${statusCode} mr-2`}>●</span>
      <span>{StatusMap[statusCode]}</span>
    </span>
  );
};

export default StatusWidget;
