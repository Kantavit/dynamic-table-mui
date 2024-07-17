import React from 'react'
import TableCell from '@mui/material/TableCell';
import { addRowFunction, deleteRowFunction, addColumnFunction, deleteColumnFunction } from '@/shared/mutation/tableData.mutation';

export const AddRow = (columns: string[], setRowsData: React.Dispatch<React.SetStateAction<string[][]>>, setModified: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <button type="button" onClick={() => addRowFunction(columns, setRowsData, setModified)} className="bg-gray-300 rounded-md p-1">
      Add Row
    </button>
  )
}

export const DeleteRow = (index: number, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>, setModified: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <TableCell align='center'>
      <button
        type="button"
        className="bg-red-400 rounded-md p-1.5"
        onClick={() => deleteRowFunction(index, setRowsData, setModified)}
      >
        Delete
      </button>
    </TableCell>
  )
}

export const AddColumn = (columns: string[], setColumns: React.Dispatch<React.SetStateAction<string[]>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>, setModified: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <button type="button" onClick={() => addColumnFunction(columns, setColumns, setRowsData, setModified)} className="bg-gray-300 rounded-md p-0.5" >
      Add Column
    </button>
  )
}

export const DeleteColumn = (index: number, columns: string[], setColumns: React.Dispatch<React.SetStateAction<string[]>>, setRowsData: React.Dispatch<React.SetStateAction<string[][]>>, setModified: React.Dispatch<React.SetStateAction<boolean>>) => {
  return (
    <TableCell key={index + 999999} align='center'>
      <button
        type="button"
        className="bg-red-400 rounded-md p-1"
        onClick={() => deleteColumnFunction(index, columns, setColumns, setRowsData, setModified)}
      >
        Delete
      </button>
  </TableCell>  
  )
}

export const RowData = (index: number, data: string[], rowsData: string[][], setRowsData: React.Dispatch<React.SetStateAction<string[][]>>) => {
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

export const ColumnData = (index: number, columns: string[], readOnly: boolean, setColumns: React.Dispatch<React.SetStateAction<string[]>>, setReadOnly: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleChange = (e: any) => {
    setColumns(columns.map((coln, id) => id === index ? e : coln))
  }
  
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
          handleChange(e.target.value)
        }
      />
    </TableCell>
  )
}
