import React,{useState,useEffect, Component, useContext} from "react";

function  Testtcounter()
{
const [count,setCount]=useState(0);
const[mul,setMul]=useState(0);

const increase=(e)=>
{
    setCount(count+1)
}

useEffect(()=>{
setMul(count*2)
},[count]);

useEffect(()=>
{
    
})


return(<div>
    <h1>clicked count : {count}</h1>
    <button onClick={increase}>+</button>
    <h1>Multiply count : {mul}</h1>
</div>)



}
export default Testtcounter;