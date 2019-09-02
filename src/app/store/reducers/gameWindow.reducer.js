import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

import { GAME_WINDOW } from "./../../units/constants";

const openAgencyWindow = (state) => {
	console.log(state);
	return {
		type: GAME_WINDOW.CONFIG.AGENCY,
		tabs: ['uno', 'dos', 'tres'],
		list: []
	}
}

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW_CLOSE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW_OPEN_AGENCY:
			return openAgencyWindow(state);
		default:
			return state;
	}
};

export default gameWindow;