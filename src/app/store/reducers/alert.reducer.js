import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

const alert = (state = initState.alert, action) => {
	switch (action.type) {
		case reducerType.ALERT.OPEN:
			console.log(action);
			return action.alert;
		case reducerType.ALERT.CLOSE:
			return action.alert;
		default:
			return state;
	}
};

export default alert;