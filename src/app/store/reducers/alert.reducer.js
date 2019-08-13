// import * as reducerType from '../../unit/reducerType';
// import { lastRecord } from '../../unit/const';

const initState = {
    message: "",
    callback: () => {}
};

const alert = (state = initState, action) => {
    switch (action.type) {
    case reducerType.RESET:
        return action.data;
    default:
        return state;
    }
};

export default aler;