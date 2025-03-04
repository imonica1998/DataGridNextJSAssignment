# Data Grid Assignment

This project implements a data grid with the following features:

## Features:
- **Table Columns:**
  - **Checkbox**: Allows selection of rows.
  - **Name**: The name of the item.
  - **Device**: The associated device for the item.
  - **Path**: The path related to the item.
  - **Status**: Displays the current status of the item.

- **"Select All" Checkbox:**
  - Located at the top of the table.
  - By default, it is labeled as "None Selected".
 
- **"Download Selected" Button:**
  - When clicked, an alert box will display all selected rows with their data (Name, Device, Path, and Status).

## Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/imonica1998/DataGridAssignment.git
   ```

2. Navigate into the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm start
   ```

## Usage:

1. **Selecting Rows**: Click the checkboxes next to the rows you want to select.
2. **Select All**: Use the "Select All" checkbox at the top to select or deselect all rows.
3. **Download Selected**: After selecting some rows, click the "Download Selected" button to see an alert with the selected rows' details.

## Technologies Used:
- React
- JavaScript/TypeScript
- HTML & CSS

