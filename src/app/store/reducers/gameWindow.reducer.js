import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

import { agencyWindow } from "./../game-windows/agency.window";
import { employeesWindow } from "./../game-windows/employees.window";

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW.CLOSE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW.SET_ACTIVE_PAGE:
			return setActivePage(state, action.index);
		case reducerType.GAME_WINDOW.OPEN_AGENCY:
			return agencyWindow(action.agency, action.status);
		case reducerType.GAME_WINDOW.OPEN_PROJECTS:
			return employeesWindow(action.projects, action.status);
		case reducerType.GAME_WINDOW.OPEN_EMPLOYEES:
			return employeesWindow(action.employees, action.status);
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

export default gameWindow;