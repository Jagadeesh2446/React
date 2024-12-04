import React,{useState,useEffect} from "react";
import "./APIintigartion.css"

function APIintigartion()
{
    const [array,setArray]=useState([   ]);

    useEffect(()=>
    {
        window.fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response)=>response.json())
        .then((json)=>{
            setArray(json)
        })
    },[]);

    return(
    <div>
<table>
    <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>City</th>
    </tr>
    {
         array.map((item)=>(
            <tr>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
        </tr>
         )
        )
        }
</table>

       
        
    </div>
    )
}
export default APIintigartion;