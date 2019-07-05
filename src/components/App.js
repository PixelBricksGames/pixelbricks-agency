import React, { Component } from "react";

import Menu from "./menu/Menu";
import Status from "./status/Status";
import Office from "./office/Office";

import "../styles/App.scss";

class App extends Component {
    render() {
        const date = "12/07";
        const reputation = 12.5;
        const happines = 12.5;
        const quality = 30;
        const money = 125000000;
        return (
            <div className="app">
                <Menu />
                <Status
                    date={date}
                    reputation={reputation}
                    happines={happines}
                    quality={quality}
                    money={money}
                />
                <Office />
            </div>
        );
    }
}

export default App;