import * as reducerType from './../../units/reducer.type';
import * as initState from './../../units/init.state';

const alert = (state = initState.alert, action) => {
	switch (action.type) {
		case reducerType.ALERT:
			return action.data;
		default:
			return state;
	}
};

export default alert;