import React, { useState } from "react";

const Triangle = ({ name, base, height }) => {
  const [area, setArea] = useState(0.0);

  const handleCalculate = () => {
    console.log("getArea: ", getArea(base, height));
    setArea(getArea(base, height));
  };

  const handleReset = () => {
    setArea(0.0);
  };

  const getArea = (base, height) => {
    return 0.5 * base * height;
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

export default Triangle;
