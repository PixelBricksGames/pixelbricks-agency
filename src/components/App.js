import React, { Component } from "react";

import Menu from "./menu/Menu";
import Status from "./status/Status";
import Office from "./office/Office";
import Alert from "./alert/Alert";

import "./App.scss";

class App extends Component {

    state = {
        status: {
            date: new Date(),
            reputation: 3005,
            karma: 10,
            happiness: 70.5,
            quality: 34.5,
            money: 125000000
        },
        workCompleted: 2,
        alertMessage: "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.",
    }

    render() {
        return (
            <div className="app">
                <Alert message={this.state.alertMessage} />
                <Menu notifications={this.state.workCompleted} />
                <Status {...this.state.status} />
                <Office />
            </div>
        );
    }
}

export default App;