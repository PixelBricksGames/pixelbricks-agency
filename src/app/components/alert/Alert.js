import React, { Component } from "react";
import PropTypes from "prop-types";

import constants from "../../shared/constants";
import Overlay from "../overlay/Overlay";

import "./Alert.scss";

class Alert extends Component {

    state = {
        alert: {
            message: this.props.message,
            callback: this.props.callback
        },
    }

    onClose = (e) => {
        e.preventDefault();
        this.setState({
            alert: {}
        });
        this.state.alert.callback();
    }

    render() {
        return (
            <Overlay
                display={this.state.alert.message ? "flex" : "none"}
                opacity="99"
                depth={Constants.Z_INDEX.Z_UI_OVER}>

                <div className="alert">
                    <button onClick={ this.onClose }></button>
                    <p>{ this.state.alert.message }</p>
                </div>

            </Overlay>
        );
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    callback: PropTypes.func
};

export default Alert;
