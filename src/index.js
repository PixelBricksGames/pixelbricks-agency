import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
// import webpackimage from "./assets/images/common/sprite.png";

import { createStore } from "redux";
import { init } from "./app/state/reducers/init.reducer";
import store from "./app/store"
// const store = createStore(
//     init,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// console.log(store.getState());

// ReactDOM.render(<App />, document.getElementById("app"));
// document.getElementById("webpack-png").setAttribute("src", webpackimage);


render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);