import * as reducerType from './../../unit/reducer.type';

const initState = {
	message: "",
	callback: () => {}
};

const alert = (state = initState, action) => {
	switch (action.type) {
		case reducerType.ALERT:
			return action.data;
		default:
			return state;
	}
};

export default alert;