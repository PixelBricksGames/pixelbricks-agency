import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";
import { GAME_WINDOW, GAME_UNITS, TABS } from "./../../units/constants";

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW_CLOSE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW_SET_ACTIVE_PAGE:
			return setActivePage(state, action.index);
		case reducerType.GAME_WINDOW_OPEN_AGENCY:
			return openAgencyWindow(state);
		case reducerType.GAME_WINDOW_OPEN_EMPLOYEES:
			return openEmployeesWindow(state);
		default:
			return state;
	}
};

const setActivePage = (state, activeIndex) => {
	const newGameWindow = {
		type: state.type,
		pageList: []
	};
	newGameWindow.pageList = state.pageList.map((page, index) => {
		return {
			...page,
			active: (activeIndex === index) ? true : false
		};
	});
	return newGameWindow;
}

const openAgencyWindow = (state) => {
	return {
		type: GAME_WINDOW.TYPE.AGENCY,
		pageList: [{
			tab: TABS.AGENCY_INFO,
			list: ['uno', 'dos', 'tres'],
			active: true
		}]
	}
}

const openEmployeesWindow = (state) => {
	return {
		type: GAME_WINDOW.TYPE.EMPLOYEES,
		pageList: [
			{
				tab: TABS.EMPLOYEES_INFO,
				info: [
					["key1", "value1"],
					["key2", "value2"],
					["key3", "value3"],
				],
				active: true
			},{
				tab: TABS.EMPLOYEES_SINGLE,
				filter: [GAME_UNITS.ACCOUNT, GAME_UNITS.ARTIST, GAME_UNITS.COPY, GAME_UNITS.PROGRAMMER],
				list: ['uno', 'dos', 'tres'],
				active: false
			},{
				tab: TABS.EMPLOYEES_DOUBLE,
				list: ['uno', 'dos', 'tres'],
				active: false
			},{
				tab: TABS.EMPLOYEES_FREELANCE,
				list: ['uno', 'dos', 'tres'],
				active: false
			}
		]
	}
}

export default gameWindow;