import React from "react";
import PropTypes from "prop-types";

import Page from "./../page/Page";

import "./PageList.scss";

const buildList = (list) => {
	if(list) {
		return (
			<ul>
				<li>
					{ list.map((item, index) => {
						return <div key={`list-${index}`}>{ item }</div>
					}) }
				</li>
			</ul>
		);
	}
};

const PageList = ({ index, tab, active, onClickTab, list }) => {
    return (
		<Page index={index} tab={tab} active={active} onClickTab={onClickTab} >
			Soy List
			{ buildList(list) }
		</Page>
    );
};

PageList.propTypes = {
	tab: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	onClickTab: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired
};

export default PageList;