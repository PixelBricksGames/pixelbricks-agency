import React from "react";
import PropTypes from "prop-types";

import Overlay from "./../overlay/Overlay";
import { Z_INDEX } from "./../../units/constants";

import GameWindowPage from "./page/GameWindowPage";

import "./GameWindow.scss";

const buildPages = (pages) => {
	if(pages) {
		return (
			<ul>
				{ pages.map((page, index) => <GameWindowPage key={index} {...page} />) }
			</ul>
		);
	}
};

const GameWindow = ({type, pageList, onClose}) => (
	<Overlay
		display={type ? "flex" : "none"}
		opacity="00"
		depth={Z_INDEX.UI_ON}
		noClickable={true}>

		<div className="game-window" >
			<button onClick={onClose}></button>
			{ buildPages(pageList) }
		</div>
	</Overlay>
);

GameWindow.propTypes = {
	type: PropTypes.string,
	pageList: PropTypes.array,
	onClose: PropTypes.func.isRequired
};

export default GameWindow;
