import React from "react";
import PropTypes from "prop-types";

import Overlay from "./../overlay/Overlay";
import { Z_INDEX } from "./../../units/constants";

import "./Alert.scss";

const Alert = ({message, onClose}) => (
	<Overlay
		display={message ? "flex" : "none"}
		opacity="99"
		depth={Z_INDEX.UI_OVER}>

		<div className="alert">
			<button onClick={onClose}></button>
			<p>{message}</p>
		</div>
	</Overlay>
);

Alert.propTypes = {
    message: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

export default Alert;
