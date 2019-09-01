import React, { Component } from "react";
import PropTypes from "prop-types";

import constants from "./../../units/constants";
import Overlay from "./../overlay/Overlay";

import "./GameWindow.scss";

const onClose = (e) => {
	e.preventDefault();
	console.log("closeGameWindow");
}

const GameWindow = ({type, tabs, list}) => (
	<Overlay
		display={type ? "flex" : "none"}
		opacity="00"
		depth={constants.Z_INDEX.Z_UI_ON}
		noClickable={true}>

		<div className="game-window" >
			<button onClick={onClose}></button>
			<p>Ola ke ase</p>
		</div>

	</Overlay>
);

GameWindow.propTypes = {
    type: PropTypes.string.isRequired,
	tabs: PropTypes.array.isRequired,
	list: PropTypes.array.isRequired
};

export default GameWindow;
