import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/test.state";

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW_UPDATE:
			return action.gameWindow;
		case reducerType.GAME_WINDOW_CLOSE:
			return action.gameWindow;
		default:
			return state;
	}
};

export default gameWindow;