import React from "react";
import PropTypes from "prop-types";

import "./InfoBar.scss";

const InfoBar = (props) => {
    return (
        <div className="info-bar">
            <div className="info-bar__value">{ props.value + (props.percentage ? "%" : "")}</div>
            <div
                className="info-bar__fill"
                style={{backgroundColor: props.color, width: props.value + "%", display: props.percentage ? "block" : "none"}}
            >
            </div>
            <div className="info-bar__base"></div>
        </div>
    );
};

InfoBar.propTypes = {
    color: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percentage: PropTypes.bool
};

InfoBar.defaultProps = {
    percentage: false
}

export default InfoBar;
