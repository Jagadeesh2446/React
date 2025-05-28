import React,{memo} from "react";

function Button(props){
return(
    <div>
        <button onClick={props.handleClick}>{props.children}</button>
    </div>
)
}
export default memo(Button);