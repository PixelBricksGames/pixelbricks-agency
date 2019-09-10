import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";
import { GAME_WINDOW, TABS } from "./../../units/constants";

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW_CLOSE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW_OPEN_AGENCY:
			return openAgencyWindow(state);
		case reducerType.GAME_WINDOW_OPEN_EMPLOYEES:
			return openEmployeesWindow(state);
		default:
			return state;
	}
};

const openAgencyWindow = (state) => {
	return {
		type: GAME_WINDOW.CONFIG.AGENCY,
		pageList: [{
			tab: TABS.AGENCY_INFO,
			list: ['uno', 'dos', 'tres']
		}]
	}
}

const openEmployeesWindow = (state) => {
	return {
		type: GAME_WINDOW.CONFIG.EMPLOYEES,
		pageList: [
			{
				tab: TABS.EMPLOYEES_INFO,
				list: ['uno', 'dos', 'tres']
			},{
				tab: TABS.EMPLOYEES_SINGLE,
				list: ['uno', 'dos', 'tres']
			},{
				tab: TABS.EMPLOYEES_DOUBLE,
				list: ['uno', 'dos', 'tres']
			},{
				tab: TABS.EMPLOYEES_FREELANCE,
				list: ['uno', 'dos', 'tres']
			}
		]
	}
}

export default gameWindow;