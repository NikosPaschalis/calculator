import React from "react";

function Keys(props) {
    return (
        <button onClick={() => props.onClick(props.keyValue)} >
            {props.keyValue}
        </button>
    );
}

export default Keys;