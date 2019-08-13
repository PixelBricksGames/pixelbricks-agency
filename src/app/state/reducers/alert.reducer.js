import StateActions from "../actions.state";

export const alert = (state = {}, action) => {
    switch (action.type) {
        case StateActions.UPDATE_ALERT:
            return {
                message: action.message,
                callback: action.callback
            }
        default:
            return state;
    }
}