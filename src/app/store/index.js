import { createStore } from "redux";
import rootReducer from "./root.reducer";

const store = createStore(
    rootReducer,
    window.devToolsExtension
    && window.devToolsExtension()
);

export default store;