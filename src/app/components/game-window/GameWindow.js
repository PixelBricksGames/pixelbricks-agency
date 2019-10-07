import React from "react";
import PropTypes from "prop-types";

import Overlay from "./../overlay/Overlay";
import { Z_INDEX } from "./../../units/constants";

import PageInfo from "./page-info/PageInfo";
import PageList from "./page-list/PageList";

import "./GameWindow.scss";

const buildPages = (pages, onClickTab) => {
	if(pages) {
		return (
			<ul className="page-list">
				{ pages.map((page, index) => {
					if(page.info) {
						return <li className="page-list__page" key={index}>
							<PageInfo
								index={index}
								onClickTab={() => {onClickTab(index)}}
								{...page} />
						</li>
					} else if(page.list) {
						return <li  className="page-list__page" key={index}>
							<PageList
								index={index}
								onClickTab={() => {onClickTab(index)}}
								{...page} />
						</li>
					}
				}) }
			</ul>
		);
	}
};

const GameWindow = ({type, pageList, onClickTab, onClose}) => (
	<Overlay
		display={type ? "flex" : "none"}
		opacity="0"
		depth={Z_INDEX.UI_ON}
		noClickable={true}>

		<div className="game-window" >
			<button className="game-window__close-button" onClick={onClose}></button>
			{ buildPages(pageList, onClickTab) }
		</div>
	</Overlay>
);

GameWindow.propTypes = {
	type: PropTypes.string,
	pageList: PropTypes.array,
	onClickTab: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default GameWindow;
