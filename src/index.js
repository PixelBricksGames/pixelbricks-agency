import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from "./app/containers/App";
import store from "./app/store";

render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('app')
);