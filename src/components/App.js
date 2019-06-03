import React, { Component } from "react";

import MenuBar from "./MenuBar";

import "../styles/App.scss";

class App extends Component {
    render() {
        return (
            <div className="app">
                <MenuBar />
                <img id="webpack-png" alt="webpack-png" />
            </div>
        );
    }
}

export default App;