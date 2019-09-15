import React from "react";

import Tab from "./tab/Tab";
import "./GameWindowPage.scss";

const buildList = (list) => {
	if(list) {
		return (
			<li>
				{ list.map((item, index) => <div key={`list-${index}`}>{ item }</div>) }
			</li>
		);
	}
};

const GameWindowPage = ({ index, tab, active, list, onClickTab }) => {
    return (
        <div className="game-page" style={{zIndex: active ? 100 : 99}} key={`${index}`}>
			<section className="game-page__tab">
				<Tab name={tab} index={index} active={active} onClick={onClickTab} />
			</section>
			<section className="game-page__content">
				Hola que pasa
				<div className="content__slider">
				<ul>
					{ buildList(list) }
				</ul>
				</div>
			</section>
        </div>
    );
}

export default GameWindowPage;