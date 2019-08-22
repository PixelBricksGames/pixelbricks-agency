import * as reducerType from './../../unit/reducer.type';

const initState = {
	type: "",
    tabs: {},
    list: {}
};

const gameWindow = (state = initState, action) => {
	switch (action.type) {
		case reducerType.GAME_WINDOW:
			return action.data;
		default:
			return state;
	}
};

export default gameWindow;