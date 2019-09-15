import React from "react";
import PropTypes from "prop-types";

import "./Tab.scss";

const Tab = ({ name, index, active, onClick }) => {
	const tabPosition = "position-" + index;
	const tabState = active ? 'enabled' : 'disabled';
	return <button className={`tab ${tabPosition} tab-${name}--${tabState}`} onClick={onClick}></button>;

}

Tab.propTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	active: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Tab;