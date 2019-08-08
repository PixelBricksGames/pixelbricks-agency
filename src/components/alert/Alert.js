import React, { Component } from "react";
import PropTypes from "prop-types";
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
            <div
                className="alert"
                style={{display: this.state.alert.message ? "flex" : "none" }}>
                <button onClick={ this.onClose }></button>
                <p>{ this.state.alert.message }</p>
            </div>
        );
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    callback: PropTypes.func
};

export default Alert;
