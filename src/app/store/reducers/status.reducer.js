import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

const status = (state = initState.status, action) => {
	switch (action.type) {
		case reducerType.STATUS.UPDATE:
			return action.status;
		default:
			return state;
	}
};

export default status;