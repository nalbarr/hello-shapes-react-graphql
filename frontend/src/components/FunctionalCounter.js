import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("count: ", count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      FunctionalCounter
      <br />
      {count}
      <br />
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default FunctionalCounter;
