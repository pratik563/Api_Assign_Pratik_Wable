//This project has been created using AG-Grid (Javascript Library) + Vite+React and for styling "Tailwind Css" is used.

// Importing useState and useEffect hooks
import React, { useState, useEffect } from "react";

// Importing "AgGridReact" javascript data grid library
import { AgGridReact } from "ag-grid-react";

// Mandatory css imported
import "ag-grid-community/styles/ag-grid.css";

// Optional theme imported
import "ag-grid-community/styles/ag-theme-alpine.css";

// Importing an component to display images
import ImageRenderer from "./ImageRenderer";

// Importing a Navbar component
import NavBar from "./NavBar";

const App = () => {
  const [rowData, setRowData] = useState([]); // Using useState hook

  // Defining the columns to be displayed
  const columnDefs = [
    {
      field: "id", // Assigning Header Name
      sortable: true, // Enabling Sorting
      filter: true, // Enabling Filtering
      width: 72, // Width of cell
      cellStyle: { color: "#303030", fontWeight: "bold" }, // Styling a cell
    },
    {
      field: "image",
      width: 82,
      cellRenderer: ImageRenderer, // set the ImageRenderer component to customize the cell
    },
    { field: "username", sortable: true, filter: true, width: 122 },
    { field: "firstName", sortable: true, filter: true, width: 122 },
    { field: "lastName", sortable: true, filter: true, width: 122 },
    { field: "age", sortable: false, filter: true, width: 82 },
    { field: "gender", sortable: false, filter: true, width: 102 },
    { field: "email", sortable: true, filter: true, width: 300 },
    { field: "phone", sortable: false, filter: true },
    {
      headerName: "Hair",
      //Using children as "Hair" contains more than one data
      children: [
        {
          field: "color",
          width: 102,
          //using valueGetter function to extract "hair-color" value.
          valueGetter: (params) => params.data.hair.color,
        },
        {
          field: "type",
          width: 102,
          valueGetter: (params) => params.data.hair.type,
        },
      ],
    },
    { field: "birthDate", width: 102, sortable: true, filter: true },
    { field: "bloodGroup", width: 102, sortable: true, filter: true },
    { field: "height", width: 102, sortable: true, filter: true },
    { field: "weight", width: 102, sortable: true, filter: true },
    { field: "eyeColor", width: 102, sortable: true, filter: true },
    {
      field: "address",
      width: 300,
      sortable: true,
      filter: true,
      valueGetter: (params) =>
        `${params.data.address.address}, ${params.data.address.city}, ${params.data.address.state}`,
    },
    { field: "university", width: 300, sortable: true, filter: true },
    {
      field: "company",
      width: 300,
      sortable: true,
      filter: true,
      valueGetter: (params) =>
        `${params.data.company.name}, ${params.data.company.title}`,
    },
    { field: "ein", width: 102, sortable: true, filter: true },
    { field: "ssn", width: 150, sortable: true, filter: true },
    {
      field: "crypto",
      sortable: true,
      filter: true,
      valueGetter: (params) =>
        `${params.data.crypto.coin}, ${params.data.crypto.wallet}`,
    },
  ];
  // using useEffect hook
  useEffect(() => {
    // Fetching an API data
    fetch("https://dummyjson.com/users")
      // Converting API data into Json form (more readable form)
      .then((response) => response.json())
      // Converting fetched data into row data state
      .then((data) => setRowData(data.users));
  }, []); // Empty dependency array to run effects once.

  const gridOptions = {
    localeText: {
      noRowsToShow: "Data Unavailable", // default message when there are no rows to show in grid
    },
    pagination: true, // Enabling Pagination
    paginationPageSize: 30, //Default Number of rows shown on page
    paginationPageSizeSelector: [10, 15, 20, 30], // To select number of rows to show on page.
    rowHeight: 50, // Set the row height to 50px
  };

  const gridStyle = {
    fontFamily: "'inter', sans-serif", //Set font family
    fontSize: "14px", //Set the font size
  };

  return (
    <div
      className="bg-gray-800"
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <NavBar />
      <div
        className="ag-theme-alpine p-4 pt-0 mt-4 " // Set the Data grid theme
        style={{ height: "80%", width: "100%", ...gridStyle }} // Style for Data grid
      >
        <AgGridReact // Set the AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          gridOptions={gridOptions}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default App;
