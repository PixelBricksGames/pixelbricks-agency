import { combineReducers } from "redux-immutable";

import alert from "./alert.reducer";

const rootReducer = combineReducers({
	alert
});

export default rootReducer;