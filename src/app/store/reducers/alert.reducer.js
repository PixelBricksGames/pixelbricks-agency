import * as reducerType from "./../../units/reducer.type";
import * as initState from "./../../units/init.state";

const alert = (state = initState.alert, action) => {
	switch (action.type) {
		case reducerType.ALERT_OPEN:
			return action.alert;
		case reducerType.ALERT_CLOSE:
			return action.alert;
		default:
			return state;
	}
};

export default alert;