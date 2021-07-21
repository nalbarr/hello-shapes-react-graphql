import React, { useState } from "react";

const Shape = ({ name, getArea }) => {
  const [area, setArea] = useState(0.0);

  const handleCalculate = () => {
    console.log("getArea: ", getArea);
    setArea(getArea);
  };

  const handleReset = () => {
    setArea(0.0);
  };

  return (
    <div>
      Shape: {name}
      <br />
      Area: {area}
      <button onClick={handleCalculate}>Calculate Area</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Shape;
