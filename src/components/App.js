import React, { Component } from "react";

import Menu from "./menu/Menu";
import Status from "./status/Status";
import Office from "./office/Office";
import Alert from "./alert/Alert";
import GameWindow from "./game-window/GameWindow";

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
        alert: {
            message: "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.",
            callback: () => {
                console.log("ola");
            }
        },
        gameWindow: {
            type: "Employee",
            tabs: {},
            list: {}
        },
        workCompleted: 2,
    }

    closeAlert = (e) => {
        e.preventDefault();
    }

    closeWindow = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <Alert {...this.state.alert} />
                <GameWindow  {...this.state.gameWindow} />
                <Menu notifications={this.state.workCompleted} />
                <Status {...this.state.status} />
                <Office />
            </div>
        );
    }
}

export default App;