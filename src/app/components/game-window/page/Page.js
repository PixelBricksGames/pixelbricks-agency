import React from "react";
import PropTypes from "prop-types";

import Tab from "./tab/Tab";
import "./Page.scss";

const Page = ({ index, tab, active, onClickTab, children }) => {
    return (
        <div className="page" style={{zIndex: active ? 100 : 99}} key={`${index}`}>
			<section className="page__tab">
				<Tab name={tab} index={index} active={active} onClick={onClickTab} />
			</section>
			<section className="page__content">
				<div className="content__slider">
					{ children }
				</div>
			</section>
        </div>
    );
};

Page.propTypes = {
	tab: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	onClickTab: PropTypes.func.isRequired
};

export default Page;