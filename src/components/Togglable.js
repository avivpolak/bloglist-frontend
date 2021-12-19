import React, { useState } from "react";
export const Toggleable = (props) => {
    const [visible, setVisible] = useState(false);
    function toggleVisible() {
        setVisible(!visible);
    }
    return (
        <div>
            <button onClick={toggleVisible}>{props.buttonLabel}</button>
            {visible ? props.children : ""}
        </div>
    );
};
