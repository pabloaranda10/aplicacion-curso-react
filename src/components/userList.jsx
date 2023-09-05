import { useEffect,useState } from "react"

export const UserList=({endPoint})=>{
    const [data,setData]=useState([])
    const fechdata =async()=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/${endPoint}')
            const data=await response.json()
            setUsers(data)
                   
        }
        catch(error){
            console.error(error)
        
        }
    }

}