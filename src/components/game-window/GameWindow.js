import React, { Component } from "react";

import "./GameWindow.scss";

class GameWindow extends Component {

    state = {
        gameWindow: {
            type: this.props.type,
            tabs: this.props.tabs,
            list: this.props.list
        },
    }

    onClose = (e) => {
        e.preventDefault();
        this.setState({
            gameWindow: {}
        });
    }

    render() {
        return (
            <div
                className="game-window__overlay"
                style={{display: this.state.gameWindow.type ? "flex" : "none" }}>
                <div className="game-window__window">
                    <button onClick={ this.onClose }></button>
                    <p>Ola ke ase</p>
                </div>
            </div>
        );
    }
}

export default GameWindow;
