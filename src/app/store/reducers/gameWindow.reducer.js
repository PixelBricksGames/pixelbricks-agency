import * as reducerType from "../../units/reducer.type";
import * as initState from "../../units/init.state";

import { agencyWindow } from "../ducks/gameWindow/agencyWindow.duck";
import { employeesWindow } from "../ducks/gameWindow/employeesWindow.duck";
import { activePage } from "../ducks/gameWindow/setActivePage.duck";

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW.CLOSE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW.SET_ACTIVE_PAGE:
			return activePage(state, action.index);
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

export default gameWindow;