import React from 'react'

export const SaveTemplate = (
  {
    columns, 
    setSaveTemplate
  }: {
    columns:string[], 
    setSaveTemplate: React.Dispatch<React.SetStateAction<string[][]>>
  }) => {

  const handleChange = (columnsData: string[]) => {
    setSaveTemplate((prevSaveTemplate) => [...prevSaveTemplate, columnsData]);
  }

  return (
    <div className='flex justify-center m-2 p-1'>
      <button type='button' onClick={() => handleChange(columns)} className='bg-blue-300 rounded-md p-1 text-white'>SaveTemplate</button>
    </div>
  )
}

export default SaveTemplate