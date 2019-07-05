import React from "react";
import PropTypes from "prop-types";

import "./LiquidBar.scss";

const LiquidBar = (props) => {
    return (
        <div className={`liquid-bar liquid-bar--${props.color}`}>
            <div>{props.value}</div>
        </div>
    );
};

LiquidBar.propTypes = {
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};

export default LiquidBar;
