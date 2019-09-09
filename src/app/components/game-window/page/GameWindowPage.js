import React from "react";

import "./GameWindowPage.scss";

const buildList = (list) => {
	if(list) {
		return (
			<li>
				{ list.map((item, index) => <div key={`list-${index}`}>{ tab }</div>) }
			</li>
		);
	}
};

const GameWindowPage = ({ id, name, tab, list }) => {
    return (
        <div className="page" key={`${id}`}>
			<section className="page__tab">
				<img src={tab} alt={name} />
			</section>
			<section className="page__content">
				<div className="content__slider">
				<ul>
					{ buildTabs(list) }
				</ul>
				</div>
			</section>
        </div>
    );
}

export default GameWindowPage;