import { combineReducers } from "redux-immutable";

import alert from "./reducers/alert.reducer";
import game from "./reducers/game.reducer";
import gameWindow from "./reducers/gameWindow.reducer";
import menu from "./reducers/menu.reducer";
import status from "./reducers/status.reducer";

const rootReducer = combineReducers({
	alert,
	game,
	gameWindow,
	menu,
	status
});

export default rootReducer;