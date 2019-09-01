import React from "react";
import PropTypes from "prop-types";

import Overlay from "./../overlay/Overlay";
import { Z_INDEX } from "./../../units/constants";

import "./GameWindow.scss";

const GameWindow = ({type, tabs, list, onClose}) => (
	<Overlay
		display={type ? "flex" : "none"}
		opacity="00"
		depth={Z_INDEX.UI_ON}
		noClickable={true}>

		<div className="game-window" >
			<button onClick={onClose}></button>
			<p>Ola ke ase</p>
		</div>

	</Overlay>
);

GameWindow.propTypes = {
    type: PropTypes.string,
	tabs: PropTypes.array,
	list: PropTypes.array,
	onClose: PropTypes.func.isRequired
};

export default GameWindow;
