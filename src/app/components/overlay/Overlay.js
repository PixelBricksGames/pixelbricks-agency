import React from "react";
import PropTypes from "prop-types";
import "./Overlay.scss";

const Overlay = ({ children, display, opacity, depth, noClickable }) => (
	<div
		className="overlay"
		style={{
			backgroundColor: `#000000${opacity}`,
			display: display,
			zIndex: depth,
			pointerEvents: noClickable ? "none" : "auto"
		}}>
			{ children }
	</div>
);

Overlay.propTypes = {
    opacity: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
	depth: PropTypes.number.isRequired,
	noClickable: PropTypes.bool
};

export default Overlay;