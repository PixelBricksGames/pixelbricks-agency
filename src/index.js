import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import webpackimage from './assets/images/sprite.png';

ReactDOM.render(<App />, document.getElementById("root"));
document.getElementById('webpack-png').setAttribute('src', webpackimage);