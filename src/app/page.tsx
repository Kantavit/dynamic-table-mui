'use client'

import { MuiTable } from "@/components/Table/MuiTable";
import { FormEvent, useState } from "react";
import { createRowData, createColumnData } from "@/components/Table/createTableData";
import { TableDataRow, TableDataColumn } from "@/shared/types/tableData.types";
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter();

  const [rowName, setRowName] = useState<string>("");
  const [calories, setCalories] = useState<number>(0);
  const [fat, setFat] = useState<number>(0);
  const [carbs, setCarbs] = useState<number>(0);
  const [protein, setProtein] = useState<number>(0);
  const [columnName, setColumnName] = useState<string>("");

  const init_columns: TableDataColumn[]  = [
    createColumnData('Name'), 
    createColumnData('Calories'), 
    createColumnData('Fat'), 
    createColumnData('Carbs'), 
    createColumnData('Protein')];

  const init_rows: TableDataRow[] = [
    createRowData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createRowData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createRowData('Sandwich', 262, 16.0, 24, 6.0),
  ];

  const [rows, setRows] = useState<TableDataRow[]>(init_rows)
  const [columns, setColumns] = useState<TableDataColumn[]>(init_columns);

  async function onSubmitData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRows([...rows, createRowData(rowName, calories, fat, carbs, protein)]);
    setRowName("");
    setCalories(0);
    setFat(0);
    setCarbs(0);
    setProtein(0);
  }

  async function onSubmitColumn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setColumns([...columns, createColumnData(columnName)]);
    setColumnName("");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center mx-auto px-24 space-y-4">
      <h1 className="text-2xl">MUI Table</h1>
      <div className="mt-8">
        <MuiTable rows={rows} columns={columns}/>
      </div>

      <div className="flex flex-row space-x-5">
        <form onSubmit={onSubmitData} className="flex flex-col gap-1.5 mt-2 border-solid border-2 border-gray-400 p-6">
          Name
          <input type="text" value={rowName} onChange={(e) => setRowName(e.target.value)} placeholder="name" className="border-solid border border-gray-400"/>
          Calories
          <input type="number" value={calories} onChange={(e)=> setCalories(e.target.valueAsNumber)} placeholder="calories" className="border-solid border border-gray-400"/>
          Fat
          <input type="number" value={fat} onChange={(e) => setFat(e.target.valueAsNumber)} placeholder="fat" className="border-solid border border-gray-400"/>
          Carbs
          <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.valueAsNumber)} placeholder="carbs" className="border-solid border border-gray-400"/>
          Protein
          <input type="number" value={protein} onChange={(e) => setProtein(e.target.valueAsNumber)} placeholder="protein" className="border-solid border border-gray-400"/>
          <button type="submit" className="bg-yellow-500 mt-2">Submit</button>
        </form>

        <form onSubmit={onSubmitColumn} className="flex flex-col gap-2 mt-2 border-solid border-2 border-gray-400 p-6 w-64">
          Column Name
          <input type="text" value={columnName} onChange={(e) => setColumnName(e.target.value)} placeholder="column name" className="border-solid border border-gray-400}"/>
        <button type="submit" className="bg-yellow-500 mt-2">Submit</button>
        </form>
      </div>

      <button className='py-2 px-4 rounded-full bg-green-400' type='button' onClick={() => router.push("/dynamic")}>Use Dynamic Table</button>
    </div>
  );
}
