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
            quality: 30,
            money: 125000000
        };
        const workCompleted = 2;
        const alert = {
            message: "ola ke ase",
            btLeft: {
                label: "Izq",
                action: () => { console.log("Izquierda o ke ase") }
            },
            btCenter: {
                label: "Cent",
                action: () => { console.log("Centro o ke dise") }
            },
            btRight: {
                label: "Der",
                action: () => { console.log("Derecha o ke piensa") }
            },
        };
        console.log(workCompleted);
        return (
            <div className="app">
                <Alert {...alert} />
                <Menu notifications={workCompleted} />
                <Status {...status} />
                <Office />
            </div>
        );
    }
}

export default App;