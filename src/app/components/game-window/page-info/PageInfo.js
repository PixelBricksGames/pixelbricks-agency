import React from "react";
import PropTypes from "prop-types";

import Page from "./../page/Page";

import "./PageInfo.scss";

const buildInfo = (list) => {
	if(list) {
		return (
			<ul>
				<li>
					{ list.map((item, index) => {
						return <div className="item" key={`list-${index}`}>
							<span className="item__key">{ item [0] }</span>
							<span className="item__separator"></span>
							<span className="item__value">{ item [1] }</span>
						</div>
					}) }
				</li>
			</ul>
		);
	}
};

const PageInfo = ({ index, tab, active, onClickTab, info }) => {
    return (
		<Page index={index} tab={tab} active={active} onClickTab={onClickTab} >
			{ buildInfo(info) }
		</Page>
    );
};

PageInfo.propTypes = {
	tab: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	onClickTab: PropTypes.func.isRequired,
	info: PropTypes.array.isRequired
};

export default PageInfo;