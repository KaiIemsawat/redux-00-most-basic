import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeBgColor } from "../features/bgTheme";

function ChangeBgColor() {
    const [bgColor, setBgColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setBgColor(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    dispatch(changeBgColor(bgColor));
                }}
            >
                Change Background Color
            </button>
        </div>
    );
}

export default ChangeBgColor;
