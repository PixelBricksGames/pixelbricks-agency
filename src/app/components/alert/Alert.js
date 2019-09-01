import React from "react";
import PropTypes from "prop-types";

import constants from "./../../units/constants";
import Overlay from "./../overlay/Overlay";

import "./Alert.scss";

const Alert = ({message, onClose}) => (
	<Overlay
		display={message ? "flex" : "none"}
		opacity="99"
		depth={constants.Z_INDEX.Z_UI_OVER}>

		<div className="alert">
			<button onClick={onClose}></button>
			<p>{message }</p>
		</div>

	</Overlay>
);

Alert.propTypes = {
    message: PropTypes.string,
    callback: PropTypes.func
};

export default Alert;
