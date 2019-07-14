import React from "react";
import PropTypes from "prop-types";

import "./InfoBar.scss";

const InfoBar = (props) => {
    return (
        <div className="info-bar">
            <div className="info-bar__base"></div>
            <div
                className="info-bar__fill"
                style={{width: (props.percentage ? 100 - props.value : 100) + "%"}}
            ></div>
            <div className="info-bar__value">{ props.value }</div>
        </div>
    );
};

InfoBar.propTypes = {
    value: PropTypes.string.isRequired,
    percentage: PropTypes.bool
};

InfoBar.defaultProps = {
    percentage: false
}

export default InfoBar;
