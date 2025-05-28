import React, { memo } from "react";

function Count(props) {
  console.log("count component");

  return (
    <div>
      {props.text} is {props.count}
    </div>
  );
}
export default memo(Count);