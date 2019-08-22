import * as reducerType from './../../unit/reducer.type';

const initState = {
	date: new Date(),
    reputation: 0,
    karma: 0,
    happiness: 0,
    quality: 0,
    money: 0
};

const status = (state = initState, action) => {
	switch (action.type) {
		case reducerType.STATUS:
			return action.data;
		default:
			return state;
	}
};

export default status;