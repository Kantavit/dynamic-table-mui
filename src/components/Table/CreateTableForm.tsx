import React, { FormEvent, useState } from "react";

const CreateTableForm = ({ setColNo }:{setColNo: React.Dispatch<React.SetStateAction<number>>}) => {
  const [cols, setCols] = useState<string>("");

  async function onSubmitColumn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let number = parseInt(cols);
    if (!number || number < 1 || number > 10) {
      alert("Cannot create more than 10 columns");
      return;
    }
    setColNo(number);
    setCols("");
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto mt-5 flex flex-col">
            <form onSubmit={onSubmitColumn} className="flex flex-col gap-2 mt-2 border-solid border-2 border-gray-400 p-6 w-64">
            Enter no. of columns
            <input id="name" name="name" type="text" value={cols} onChange={(e) => setCols(e.target.value)} placeholder="column no." className="border-solid border border-gray-400}"/>
            <button type="submit" className="bg-yellow-500 mt-2">Submit</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default CreateTableForm;
