import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/test.state";

const status = (state = initState.status, action) => {
	switch (action.type) {
		case reducerType.STATUS_UPDATE:
			return action.status;
		default:
			return state;
	}
};

export default status;