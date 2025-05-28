import React,{useReducer} from "react";

const intialstate={count:0}

function reducer(state,action)
{
    switch(action.type)
    {
       case 'increase' : return{ count:state.count+1};
       case 'decrease' : return{count:state.count-1};
       case 'reset' : return{count:state.count=0};
       default :return{count : state.count};
    }
}

function ReducerExample()
{

    const [state,dispatch]=useReducer(reducer,intialstate);

    return(
        <div>
            <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
            <button onClick={()=>dispatch({type:'decrease'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
            <h1>{state.count}</h1>
        </div>
    )

}
export default ReducerExample;