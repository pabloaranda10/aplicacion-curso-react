import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

const Items=({nombre,visto})=>{
    return(
        <li >{nombre}
        {visto ? '✅':'❌'}</li>
    )
}

export const ListadoApp= () => {
    const addTask=()=>{
        setArreglo([...arreglo,{nombre:'nuevo',visto:false}])
    }
    let ListadoSecciones = [
        {id:0, nombre:'Instalaciones necesarias',visto:true},
        {id:1, nombre:"Uso de VITE",visto : true },
        {id:2, nombre :"Componentes",visto : true  },
        {id:3, nombre :"Variables en JSX",visto : true   },
        {id:4, nombre :"Props",visto : true},
        {id:5, nombre :"Eventos",visto : true},
        {id:6, nombre :"Use State",visto : true},
        {id:7, nombre :"Redux",visto : false},
        {id:8, nombre :"Custom Hooks",visto : false},

    ]
    const[arreglo,setArreglo]=useState(ListadoSecciones)
const onAgregarTarea=(val)=>{
    let val=val.trim()
    if(val<1)return
   const envio={
    id:arreglo.length,
    nombre:val,
    visto:false
   }
   setArreglo([...arreglo,envio])
}

    return(
        <>
        <h1>Listado del curso</h1>
        <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
        <ol>
            {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
        </ol>
      
       </>
    )
}