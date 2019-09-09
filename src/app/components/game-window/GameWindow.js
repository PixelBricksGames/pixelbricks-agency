import React from "react";
import PropTypes from "prop-types";

import Overlay from "./../overlay/Overlay";
import { Z_INDEX } from "./../../units/constants";

import "./GameWindow.scss";

const buildTabs = (tabs) => {
	if(tabs) {
		return (
			<ul>
				{ tabs.map((tab, index) => buildTab(tab, index)) }
			</ul>
		);
	}
};

const buildTab = (tab, index) => (
	<li key={index}>{ tab }</li>
);

const GameWindow = ({type, pageList, onClose}) => (
	<Overlay
		display={type ? "flex" : "none"}
		opacity="00"
		depth={Z_INDEX.UI_ON}
		noClickable={true}>

		<div className="game-window" >
			<button onClick={onClose}></button>
			{ buildTabs(tabs) }
			<p>Ola ke ase</p>
		</div>
	</Overlay>
);

GameWindow.propTypes = {
	type: PropTypes.string,
	pageList: PropTypes.object,
	onClose: PropTypes.func.isRequired
};

export default GameWindow;
