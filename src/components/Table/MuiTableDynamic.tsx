import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteColumn, DeleteRow, ColumnData, RowData, AddRow, AddColumn } from './TableMutation';

export const MuiTableDynamic = ({colNo}: {colNo: number}) => {
  const [columns, setColumns] = useState<string[]>([]);
  const [generating, setGenerating] = useState<boolean>(true);
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [rows, setRows] = useState<number>(0);
  const [rowsData, setRowsData] = useState<string[][]>([]);
  const [modified, setModified] = useState<boolean>(false);

//   const exportToJson = () => {
//     const data = [];

//     rowsData.map((row, index) => {
//       const obj = { sno: index + 1 };
//       columns.map((col, i) => {
//         obj[col] = row[i];
//       });
//       data.push(obj);
//     });

//     const fileData = JSON.stringify(data);
//     const blob = new Blob([fileData], { type: "text/plain" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.download = `data.json`;
//     link.href = url;
//     link.click();
//   };

  useEffect(() => {
    if (columns.length < colNo && !modified) {
      for (let i = columns.length; i < colNo; i++) {
        setColumns([...columns, `Column ${columns.length + 1}`]);
      }
    }
    setGenerating(false);
  }, [colNo, columns, modified]);

  return (
    <div>
      <div className="mt-5 mb-5 flex flex-col">
        <div className="flex ml-auto mr-16">
          <span>Columns: {columns.length} </span> &nbsp;&nbsp;
          <span>Rows: {rows} </span>&nbsp;&nbsp;
          {AddRow(columns, setModified, setRows, setRowsData)}
          &nbsp;&nbsp;
          {AddColumn(columns, setModified, setColumns, setRowsData)}

          {/* &nbsp;&nbsp; */}
          {/* <button type="button" onClick={exportToJson} >
            Save as JSON
          </button>
          &nbsp;&nbsp; */}
          {/* <ExportToExcel columns={columns} rowsData={rowsData} /> */}
        </div>
      </div>
      
      <div className="flex">
        <div className="px-5 flex flex-col" aria-label='dynamic table'>
          {!generating ? (
            <>
            <TableContainer component={Paper}>
              <Table className="my-5 h-100">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    {columns.map((_, index) => (
                      DeleteColumn(index, columns, setModified, setColumns, setRowsData)
                    ))}
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow className="bg-dark text-white">
                    <TableCell
                      scope="col"
                      className="d-flex align-items-center justify-content-center py-3 pb-2 border-0"
                      align='center'
                    >
                      no.
                    </TableCell>
                    {columns.map((_, index) => (
                      ColumnData(index, columns, readOnly, setColumns, setModified, setReadOnly)
                    ))}
                    <TableCell align='center'>
                      {AddColumn(columns, setModified, setColumns, setRowsData)}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsData.length > 0 ? (
                    <>
                      {rowsData.map((data, index) => (
                        <TableRow key={index + 5}>
                            {RowData(index, data, rowsData, setModified, setRows, setRowsData)}
                            {DeleteRow(index, setModified, setRows, setRowsData)}
                        </TableRow>
                        
                      ))}
                    <TableRow>
                        <TableCell colSpan={columns.length + 2} className="pt-5" align='center'>
                            {AddRow(columns, setModified, setRows, setRowsData)}
                        </TableCell>
                    </TableRow>
                    </>
                  ) : (
                    <>
                      <TableRow>
                        <TableCell colSpan={columns.length + 2} align='center'>
                          Please click on Add Row Button to add a row
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell colSpan={columns.length + 2} className="pt-5" align='center'>
                          {AddRow(columns, setModified, setRows, setRowsData)}
                        </TableCell>
                      </TableRow>
                    </>
                  )}
                </TableBody>
              </Table>
              </TableContainer>
            </>
          ) : (
            <h1 className="text-center my-5">Generating...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default MuiTableDynamic;
