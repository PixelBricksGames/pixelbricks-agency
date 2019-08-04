import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Alert.scss";

class Alert extends Component {

    state = {
        alert: {
            message: this.props.message,
            show: this.props.show,
            callback: this.props.callback
        },
    }

    onClose = (e) => {
        e.preventDefault();
        this.setState({
            alert: {
                message: "",
                show: false
            }
        });
        this.state.alert.callback();
    }

    render() {
        return (
            <div
                className="alert__overlay"
                style={{display: this.state.alert.show ? "flex" : "none" }}>
                <div className="alert__window">
                    <button onClick={ this.onClose }></button>
                    <p>{ this.state.alert.message }</p>
                </div>
            </div>
        );
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    callback: PropTypes.func
};

export default Alert;
