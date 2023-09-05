import { useState } from "react"
export const AgregarTarea= ({agregarTarea}) => {
    const [inputValue,setInputValue]=useState('')
    const onInputChange=(event)=>{
        setInputValue(event.target.value)

    }
    const onsubmit=(event)=>{
     
        event.preventDefault()
        agregarTarea(inputValue)

    }
  return (
    <>
    <form onSubmit={onsubmit}>
   <input
   type="text"
   placeholder="Ingrese la tarea"
   value={inputValue}
   onChange={onInputChange}
   />
   </form>
   </>
  )
    }