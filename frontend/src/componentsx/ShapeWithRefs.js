import React, { useState, createRef } from "react";
import MyInput from "./MyInput";

const ShapeWithRefs = ({ name, getArea }) => {
    const [area, setArea] = useState(0.0);
    const [inputText, setInputText] = useState("");

    const handleCalculate = () => {
        console.log("getArea: ", getArea);
        setArea(getArea);
    };

    const handleReset = () => {
        setArea(0.0);
    };

    const ref = createRef();

    const setJsxInputValue = () => {
        let millis = new Date().getMilliseconds();
        console.log("now: ", millis);
        setInputText(millis);
    };

    const setDOMInputFocus = () => {
        // NOTE:
        // - NA. Direct DOM element mutation!
        ref.current.focus();
    };

    const setDOMInputValue = () => {
        // NOTE:
        // - NA. Direct DOM element mutation!
        ref.current.value = "xxx";
    };

    return (
        <div>
            Shape: {name}
            <br />
            Area: {area}
            <button onClick={handleCalculate}>Calculate Area</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={setJsxInputValue}>setJsxInputValue</button>
            <button onClick={setDOMInputFocus}>setDOMInputFocus</button>
            <button onClick={setDOMInputValue}>setDOMInputValue</button>
            <MyInput ref={ref} value={inputText}></MyInput>
        </div>
    );
};

export default ShapeWithRefs;
