import React from "react";
import PropTypes from "prop-types";

import "./InfoBar.scss";

const InfoBar = ({ value, percentage }) => (
	<div className="info-bar">
		<div className="info-bar__base"></div>
		<div
			className="info-bar__fill"
			style={{width: (percentage ? 100 - value : 100) + "%"}}
		></div>
		<div className="info-bar__value">{ value }</div>
	</div>
);

InfoBar.propTypes = {
    value: PropTypes.string.isRequired,
    percentage: PropTypes.bool
};

InfoBar.defaultProps = {
    percentage: false
}

export default InfoBar;
