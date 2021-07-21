import React, { useState, useRef } from "react";

const FunctionalCounterWithRefs = () => {
  const [count, setCount] = useState(0);
  const [twotimes, setTwoTimes] = useState(0);
  const twotimesRef = useRef(0);

  const increment = () => {
    console.log("count: ", count + 1);
    setCount(count + 1);
  };

  const focusOnRef = () => {
    // emulate 2x by calling incremental operator two times
    twotimesRef.current++;
    twotimesRef.current++;
    console.log("twotimesRef: ", twotimesRef.current);
    setTwoTimes(twotimesRef.current);
  };

  return (
    <div>
      FunctionalCounterWithRefs
      <br />
      {count}
      <br />
      {twotimes}
      <br />
      <button onClick={increment}>+1</button>
      <button onClick={focusOnRef}>2 x</button>
    </div>
  );
};

export default FunctionalCounterWithRefs;
