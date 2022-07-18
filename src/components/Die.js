import React from "react";

export default function Die(props) {
    const holdStyle = {
        backgroundColor: props.isHeld ? "#59e391" : "white"
    }
    return (
        <div className="die" style={holdStyle}>
            <h1 className="die--num" onClick={props.onclick}>
                {props.value}
            </h1>
        </div>
    )
}