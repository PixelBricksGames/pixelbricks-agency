import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = (props) => {

    const Close = (e) => {
        e.preventDefault();
        // props.message = undefined;
        console.log("Close");
    };

    return (
        <div
            className="alert__overlay"
            style={{display: props.message ? 'flex': 'none'}}>
            <div className="alert__window">
                <button onClick={Close}></button>
                <p>{ props.message }</p>
            </div>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string
};

export default Alert;
