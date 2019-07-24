import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = (props) => {

    const onClose = (e) => {
        e.preventDefault();
        props.callback();
    }

    return (
        <div
            className="alert__overlay"
            style={{display: props.show ? "flex" : "none" }}>
            <div className="alert__window">
                <button onClick={ onClose }></button>
                <p>{ props.message }</p>
            </div>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    callback: PropTypes.func
};

export default Alert;
