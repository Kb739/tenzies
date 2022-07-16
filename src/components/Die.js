import React from "react";

export default function Die(props) {
    return (
        <div className="die">
            <h1 className="die--num">
                {props.value}
            </h1>
        </div>
    )
}