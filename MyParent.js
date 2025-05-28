import React, { useCallback, useState } from "react";


import Button from "./Button";
import Count from "./Count";

function MyParent() {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(10000);

  const increaseAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 3000);
  }, [salary]);

  console.log("my parent component");
  return (
    <div>
      
      <Count text="age" count={age} />
      <Button handleClick={increaseAge}>increaseAge</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={increaseSalary}>increaseSalary</Button>
    </div>
  );
}
export default MyParent;
