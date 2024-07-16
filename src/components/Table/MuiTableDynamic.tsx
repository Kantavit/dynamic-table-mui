import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteColumn, DeleteRow, ColumnData, RowData, AddRow, AddColumn } from './TableMutation';
import SaveTemplate from '@/components/Table/SaveTemplate';

export const MuiTableDynamic = (
    {
        colNo, 
        setTemplate
    }: {
        colNo: number, 
        setTemplate: React.Dispatch<React.SetStateAction<string[][]>>
    }) => {

  const [columns, setColumns] = useState<string[]>([]);
  const [rowsData, setRowsData] = useState<string[][]>([]);
  const [readOnly, setReadOnly] = useState<boolean>(true);

  useEffect(() => {
    if (columns.length < colNo) {
      for (let i = columns.length; i < colNo; i++) {
        setColumns([...columns, `Column ${columns.length + 1}`]);
      }
    }
  }, [colNo, columns]);

  return (
    <div>
      <div className="my-5 flex flex-col">
        <div className="flex ml-auto mr-16">
          <span>Columns: {columns.length} </span> &nbsp;&nbsp;
          <span>Rows: {rowsData.length} </span>&nbsp;&nbsp;
          {AddRow(columns, setRowsData)}
          &nbsp;&nbsp;
          {AddColumn(columns, setColumns, setRowsData)}
        </div>
      </div>
      
      <div className="flex">
        <div className="px-5 flex flex-col" aria-label='dynamic table'>
            <>
            <TableContainer component={Paper}>
              <Table className="my-5 h-100">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    {columns.map((_, index) => (
                      DeleteColumn(index, columns, setColumns, setRowsData)
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
                      ColumnData(index, columns, readOnly, setColumns, setReadOnly)
                    ))}
                    <TableCell align='center'>
                      {AddColumn(columns, setColumns, setRowsData)}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsData.length > 0 ? (
                    <>
                      {rowsData.map((data, index) => (
                        <TableRow key={index + 5}>
                            {RowData(index, data, rowsData, setRowsData)}
                            {DeleteRow(index, setRowsData)}
                        </TableRow>
                      ))}
                    </>
                  ) : (
                    <>
                        <TableRow>
                            <TableCell colSpan={columns.length + 2} align='center'>
                            Please click on Add Row Button to add a row
                            </TableCell>
                        </TableRow>
                    </>
                  )}
                  <TableRow>
                        <TableCell colSpan={columns.length + 2} className="pt-5" align='center'>
                            {AddRow(columns, setRowsData)}
                        </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
              </TableContainer>
            </>
        </div>
      </div>
      
      <SaveTemplate columns={columns} setTemplate={setTemplate}/>
    </div>
  );
};

export default MuiTableDynamic;
