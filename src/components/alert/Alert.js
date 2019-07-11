import React from "react";
import PropTypes from "prop-types";

import "./Alert.scss";

const Alert = (props) => {

    let msg = props.message;

    const getDisplay = () => {
        return !msg ? "flex" : "none";
    }

    const Close = (e) => {
        e.preventDefault();
        msg = undefined;
    };

    return (
        <div
            className="alert__overlay"
            style={{display: getDisplay() }}>
            <div className="alert__window">
                <button onClick={Close}></button>
                <p>{ msg }</p>
            </div>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string
};

export default Alert;
