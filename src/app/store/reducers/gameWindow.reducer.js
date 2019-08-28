import * as reducerType from './../../units/reducer.type';
import * as initState from './../../units/init.state';

const gameWindow = (state = initState.gameWindow, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW:
			return action.gameWindow;
		default:
			return state;
	}
};

export default gameWindow;