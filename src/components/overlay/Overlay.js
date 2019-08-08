import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = ({ children, alert, gameWindow }) => {

    // state = {
    //     alert: alert,
    //     gameWindow: gameWindow,
    // }

    console.log(alert);

    const opacity = alert.message ? 99 : 55;

    return (
        <div
            className="overlay"
            style={{ backgroundColor: "#000000" + opacity }}>
                { children }
        </div>
    );
};

export default Overlay;