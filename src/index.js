import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Root from "./app/components/root/Root";
import store from "./app/store";

render(
    <Provider store={store}>
        <Root />
	</Provider>,
	document.getElementById("root")
);