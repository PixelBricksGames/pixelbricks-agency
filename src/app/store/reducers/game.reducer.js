import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

const game = (state = initState.game, action) => {
	switch (action.type) {
		case reducerType.GAME.AGENCY.CHANGE_NAME:
			return action.game;
		default:
			return state;
	}
};

export default game;