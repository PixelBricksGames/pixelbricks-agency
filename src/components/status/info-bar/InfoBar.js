import React from "react";
import PropTypes from "prop-types";

import "./InfoBar.scss";

const InfoBar = (props) => {
    return (
        <div className="info-bar">
            <div className="info-bar__base"></div>
            <div
                className="info-bar__fill"
                style={{backgroundColor: props.color, width: props.value + "%", display: props.percentage ? "block" : "none"}}
            ></div>
            
            <div className="info-bar__value">{ props.value + (props.percentage ? "%" : "")}</div>
        </div>
    );
};

InfoBar.propTypes = {
    value: PropTypes.number.isRequired,
    color: PropTypes.string,
    percentage: PropTypes.bool
};

InfoBar.defaultProps = {
    percentage: false
}

export default InfoBar;
