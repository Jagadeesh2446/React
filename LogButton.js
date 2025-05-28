import React,{useRef} from "react";

function LogButton()
{
  const count=useRef(0);
  
  const Checkref=()=>
  {
      count.current++;
     <h1>Count Value is : {count.current}</h1>
     console.log('count value is'+count.current)
  }

  return(<div>
    <button onClick={Checkref}>Checkref</button>
    <br></br>
  </div>)
}
export default LogButton;