import React from 'react'

const FormComponent = ({ formData, inputChange, onSumbit }) => {
  return (
    <form onSubmit={onSumbit}>

      {
        Object.keys(formData)
          .map((key, i) => (
            <>
              <label htmlFor="name" key={i}>Ingrese {key}</label>
              <input required type="text" id={key} name={key} value={formData[key]} onChange={inputChange}/>
            </>
          ))
      }
      <button className='btn btn-primary'>Create order</button>
    </form>
  )
}

export default FormComponent