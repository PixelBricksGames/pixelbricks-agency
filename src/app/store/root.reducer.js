import { combineReducers } from "redux";
// import { combineReducers } from "redux-immutable";

import alert from "./reducers/alert.reducer";
import gameWindow from "./reducers/gameWindow.reducer";
import menu from "./reducers/menu.reducer";
import status from "./reducers/status.reducer";

const rootReducer = combineReducers({
	alert,
	gameWindow,
	menu,
	status
});

export default rootReducer;