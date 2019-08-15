import * as reducerType from '../reducer.type';

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