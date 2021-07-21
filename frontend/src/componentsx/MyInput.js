import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => (
    <input ref={ref} type="text" value={props.value} />
));

export default MyInput;