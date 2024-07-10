import React from 'react'
import TableCell from '@mui/material/TableCell';
import { addRowFunction, deleteRowFunction, addColumnFunction, deleteColumnFunction } from '@/shared/mutation/tableData.mutation';

export const DeleteColumn = (index: number, columns: string[], setModified: React.Dispatch<React.SetStateAction<boolean>>, setColumns: React.Dispatch<React.SetStateAction<string[]>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
  return (
    <TableCell key={index + 999999} align='center'>
      <button
        type="button"
        className="bg-red-400 rounded-md p-1"
        onClick={() => deleteColumnFunction(index, columns, setModified, setColumns, setRowsData)}
      >
        Delete
      </button>
  </TableCell>  
  )
}

export const DeleteRow = (index: number, setModified: React.Dispatch<React.SetStateAction<boolean>>, setRows: React.Dispatch<React.SetStateAction<number>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
  return (
    <TableCell align='center'>
      <button
        type="button"
        className="bg-red-400 rounded-md p-1.5"
        onClick={() => deleteRowFunction(index, setModified, setRows, setRowsData)}
      >
        Delete
      </button>
    </TableCell>
  )
}

export const ColumnData = (index: number, columns: string[], readOnly: boolean, setColumns: React.Dispatch<React.SetStateAction<string[]>>, setModified: React.Dispatch<React.SetStateAction<boolean>>, setReadOnly: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <TableCell key={index} scope="col" align='center'>
      <input
        type="text"
        className="form-control border-0 text-center bg-dark text-black"
        style={{ outline: "none", boxShadow: "none" }}
        readOnly={readOnly}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        value={columns[index]}
        onChange={(e) =>
          setColumns(
            columns.map((coln, id) =>
              id === index ? e.target.value : coln
            )
          )
        }
      />
    </TableCell>
  )
}

export const RowData = (index: number, data: string[], rowsData: string[][], setModified: React.Dispatch<React.SetStateAction<boolean>>, setRows: React.Dispatch<React.SetStateAction<number>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
  const handleChange = (e: any, index: any, index2: any) => {
    const fields = rowsData[index].map((r, j) => (j === index2 ? e : r));
    setRowsData(rowsData.map((rw, i) => (i === index ? fields : rw)));
  };

  return (
    <>
      <TableCell className="text-center" align='center'>{index + 1}</TableCell>
      {data.map((_:any, index2: any) => (
        <TableCell key={index2 + 988} align='center'>
          <input
            type="text"
            className="form-control text-center"
            placeholder={`Enter field`}
            value={rowsData[index][index2]}
            onChange={(e) =>
              handleChange(e.target.value, index, index2)
            }
          />
        </TableCell>
      ))}
    </>
  )
}

export const AddRow = (columns: string[], setModified: React.Dispatch<React.SetStateAction<boolean>>, setRows: React.Dispatch<React.SetStateAction<number>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
  return (
    <button type="button" onClick={() => addRowFunction(columns, setModified, setRows, setRowsData)} className="bg-gray-300 rounded-md p-1">
      Add Row
    </button>
  )
}

export const AddColumn = (columns: string[], setModified: React.Dispatch<React.SetStateAction<boolean>>, setColumns: React.Dispatch<React.SetStateAction<string[]>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
  return (
    <button type="button" onClick={() => addColumnFunction(columns, setModified, setColumns, setRowsData)} className="bg-gray-300 rounded-md p-0.5" >
      Add Column
    </button>
  )
}