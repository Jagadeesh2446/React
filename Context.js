import React,{useState,useEffect, Component, useContext} from "react";

const Context=React.createContext();

function ContextData()
{

const data={Name:"Chintu",Age:22,Gender:"Male"};
return(<div>
<Context.Provider value={ data }>
<A/>
</Context.Provider>
</div>)


}
function A()
{
    const data = useContext(Context);
    return(<div>
            <h1>Name : {data.Name}</h1>
            <h1>Age : {data.Age}</h1>
            <h1>Gender : {data.Gender}</h1>
    </div>);
    
}
export default ContextData;