import React from "react";

function Wrapper(props) {
    return (
    <div className="container">{props.children}</div>
    )
}

export default Wrapper;