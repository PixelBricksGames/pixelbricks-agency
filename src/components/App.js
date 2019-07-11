import React, { Component } from "react";

import Menu from "./menu/Menu";
import Status from "./status/Status";
import Office from "./office/Office";
import Alert from "./alert/Alert";

import "./App.scss";

class App extends Component {
    render() {
        const status = {
            date: new Date(),
            reputation: 12.5,
            happines: 12.5,
            quality: 50,
            money: 125000000
        };
        const workCompleted = 2;
        const alertMessage = "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.";
        console.log(workCompleted);
        return (
            <div className="app">
                <Alert message={alertMessage} />
                <Menu notifications={workCompleted} />
                <Status {...status} />
                <Office />
            </div>
        );
    }
}

export default App;