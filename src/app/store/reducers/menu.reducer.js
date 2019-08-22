import * as reducerType from './../../unit/reducer.type';

const initState = {
	workCompleted: 0
};

const menu = (state = initState, action) => {
	switch (action.type) {
		case reducerType.MENU:
			return action.data;
		default:
			return state;
	}
};

export default menu;