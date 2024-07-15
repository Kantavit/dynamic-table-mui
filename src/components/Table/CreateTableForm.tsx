import React, { FormEvent, useState } from "react";

const CreateTableForm = ({ setColNo }:{setColNo: React.Dispatch<React.SetStateAction<number>>}) => {
  const [cols, setCols] = useState<number>(0);

  async function onSubmitColumn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!cols || cols < 1 || cols > 10) {
      alert("Cannot create more than 10 columns");
      return;
    }
    setColNo(cols);
    setCols(0);
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto mt-5 flex flex-col">
            <form onSubmit={onSubmitColumn} className="flex flex-col gap-2 mt-2 border-solid border-2 border-gray-400 p-6 w-64">
            Enter no. of columns
            <input type="number" value={cols} onChange={(e) => setCols(e.target.valueAsNumber)} placeholder="column name" className="border-solid border border-gray-400}"/>
            <button type="submit" className="bg-yellow-500 mt-2">Submit</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default CreateTableForm;
