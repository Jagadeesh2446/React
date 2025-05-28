import React,{useRef} from "react";

function Input(){

    const inputvalue=useRef("");

    const focusInput=()=>
    {
        inputvalue.current.focus();
    }

    return(
        <div>
            <input type="text" ref={inputvalue}></input>
            <button onClick={focusInput}>Submit</button>
        </div>
    )
}
export default Input;