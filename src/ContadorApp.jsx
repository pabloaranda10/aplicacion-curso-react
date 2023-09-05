import { useState } from "react"

export const  ContadorApp = ({value}) => {
    const[contador,setContador]=useState(value)
    const handleClick=()=>{
       setContador(contador+100)
        }
  return (
    <>
    <h1>Contador:</h1>
    <p>{contador}</p>
    <button onClick={()=>handleClick(value)}>
        Soy un Botón
        </button>
   </>
  )
}
