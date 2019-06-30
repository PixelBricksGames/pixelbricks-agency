import React, { Component } from "react";

import Menu from "./menu/Menu";
import Status from "./status/Status";
import Office from "./office/Office";

import "../styles/App.scss";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Menu />
                <Status />
                <Office />
            </div>
        );
    }
}

export default App;