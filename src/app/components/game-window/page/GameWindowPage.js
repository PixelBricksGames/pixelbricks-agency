import React from "react";

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

const GameWindowPage = ({ id, name, tab, list }) => {
    return (
        <div className="game-page" key={`${id}`}>
			<section className="game-page__tab">
				<img src={tab} alt={name} />
			</section>
			<section className="game-page__content">
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