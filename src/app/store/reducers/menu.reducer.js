import * as reducerType from './../../units/reducer.type';
import * as initState from './../../units/init.state';

const menu = (state = initState.menu, action) => {
	switch (action.type) {
		case reducerType.UPDATE_MENU:
			return action.menu;
		default:
			return state;
	}
};

export default menu;