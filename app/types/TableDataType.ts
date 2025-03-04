export type Status = "scheduled" | "available";
export interface TableRow{ 
    name: string; 
    device: string; 
    path: string; 
    status: Status; 
}

export interface TableRowWithCheckbox extends TableRow{ 
   checked:boolean;
}

export interface GridOperationsWidgetContext{
    selectAll: boolean;
    enableDownload: boolean;
    selectionStatus: string;
    handleSelectAll: () => void;
    handleDownloadClick: () => void;
}
