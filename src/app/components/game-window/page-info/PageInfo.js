import React from "react";
import PropTypes from "prop-types";

import Page from "./../page/Page";

import "./PageInfo.scss";

const editableButtons = (index, value) => {
	if(typeof value === 'string') {
		return (
			<span className="item__editable">
				<button className="item__editable--edit" click={() => { onEditInfoValue(index, value) }}></button>
			</span>
		);
	} else if(typeof value === 'number') {
		return (
			<span className="item__editable">
				<button className="item__editable--minus" click={() => { onDecrementInfoValue(index, value) }}></button>
				<button className="item__editable--plus" click={() => { onIncrementInfoValue(index, value) }}></button>
			</span>
		);
	}
}

const buildInfo = (list) => {
	if(list) {
		return (
			<ul>
				<li>
					{ list.map((item, index) => {
						let editableItem;
						if(item[2]) {
							editableItem = editableButtons(index, item[1])
						}

						return <div className="item" key={`list-${index}`}>
							<span className="item__key">{ item[0] }</span>
							<span className="item__separator"></span>
							<span className="item__value">{ item[1] }</span>
							{ editableItem }
						</div>
					}) }
				</li>
			</ul>
		);
	}
};

const PageInfo = ({ index, tab, active, onClickTab, info, onEditInfoValue, onIncrementInfoValue, onDecrementInfoValue }) => {
    return (
		<Page index={index} tab={tab} active={active} onClickTab={onClickTab} >
			{ buildInfo(info, onEditInfoValue, onIncrementInfoValue, onDecrementInfoValue) }
		</Page>
    );
};

PageInfo.propTypes = {
	tab: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	onClickTab: PropTypes.func.isRequired,
	info: PropTypes.array.isRequired,
	onEditInfoValue: PropTypes.func.isRequired,
	onIncrementInfoValue: PropTypes.func.isRequired,
	onDecrementInfoValue: PropTypes.func.isRequired
};

export default PageInfo;