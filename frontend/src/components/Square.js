import React, { useState } from "react";

const Square = ({ name, side }) => {
  const [area, setArea] = useState(0.0);

  const handleCalculate = () => {
    setArea(getArea(side));
  };

  const handleReset = () => {
    setArea(0.0);
  };

  const getArea = (side) => {
    return side * side;
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

export default Square;
