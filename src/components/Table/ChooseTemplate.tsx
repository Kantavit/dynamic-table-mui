import React from 'react'

export const ChooseTemplate = (
  {
    saveTemplate,
    setSelectTemplate
  }: {
    saveTemplate:string[][],
    setSelectTemplate: React.Dispatch<React.SetStateAction<string[]>>
  }) => {

  return (
    <div className='flex flex-col'>
      <label htmlFor="template-select">Choose table template</label>
      <select name="template" id="template-select" onChange={(e) => setSelectTemplate(e.target.value.split(","))}>
        <option value="">Please select table template</option>
        {saveTemplate.map((temp, index) => 
          <option key={index} value={temp}>Template {index+1}</option>
        )}
      </select>
    </div>
  )
}

export default ChooseTemplate