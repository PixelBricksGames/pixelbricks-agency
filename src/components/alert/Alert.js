import React from "react";

import "./Alert.scss";

const Alert = (props) => {
    console.log(props);

    let buttonLeft;
    let buttonCenter;
    let buttonRight;
/*
    if (props.btRight) {
        buttonLeft = <div>{ props.btLeft.label } { props.btRight.label }</div>;
    } else {
        buttons = <div>{ props.btRight.label }</div>;
    }
*/
    return (
        <div className="alert__overlay">
            <div className="alert__window">
                <p>{ props.message }</p>
            </div>
        </div>
    );
};

export default Alert;
