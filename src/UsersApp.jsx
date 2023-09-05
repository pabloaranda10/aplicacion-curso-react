import {useState } from "react"
import {UserList } from "./components/userList"

export const UsersApp=()=>{

    const [users,setUsers]=useState([])
    
    const[endPoint,setendPoint]=useState('users')

    const handleFetch =()=>{
        setendPoint('comments')
    }
    return(
        <>
        <h1>Lista de Usuario</h1>
        <UserList endPoint={endPoint}></UserList>
    <button onClick={handleFetch()}>Consultar Api</button>
        </>
    )

}

