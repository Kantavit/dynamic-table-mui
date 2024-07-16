import React from 'react'

export const ChooseTemplate = ({template}: {template:string[][]}) => {
  return (
    // label select option
    <div className='flex flex-col'>
      <label htmlFor="template-select">Choose table template</label>
      <select name="template" id="template-select">
        <option value="">Please select table template</option>
        {template.map((temp, index) => 
          <option key={index} value={temp}>Template {index+1}</option>
        )}
      </select>
    </div>
  )
}

export default ChooseTemplate