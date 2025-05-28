import React,{useState,useCallback} from "react";
import Count from "./Count";
import Button from "./Button";

function CallbackExample()
{
    const[age,setAge]=useState(18);

    const[salary,setSalary]=useState(100000);

    const updateAge=useCallback(()=>{
        setAge(age+1)
    },[age]);

    const updatesalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary]);

    return(<div>

        <Count text="age" count={age}></Count>
         <Button handleClick={updateAge}>UpdateAge</Button>

        <Count text="salary" count={salary}></Count>
        <Button handleClick={updatesalary}>UpdateSalary</Button>

        
    </div>)

}
export default CallbackExample;