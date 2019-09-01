import * as reducerType from './../../units/reducer.type';
import * as initState from './../../units/test.state';

const alert = (state = initState.alert, action) => {
	switch (action.type) {
		case reducerType.ALERT_UPDATE:
			return action.alert;
		default:
			return state;
	}
};

export default alert;