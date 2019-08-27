import React, { Component } from "react";
import PropTypes from "prop-types";

import constants from "../../units/constants";
import Overlay from "./../overlay/Overlay";

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
            <Overlay
                display={this.state.gameWindow.type ? "flex" : "none"}
                opacity="33"
                depth={constants.Z_INDEX.Z_UI_ON}>

                <div className="game-window" >
                    <button onClick={ this.onClose }></button>
                    <p>Ola ke ase</p>
                </div>

            </Overlay>
        );
    }
}

export default GameWindow;
