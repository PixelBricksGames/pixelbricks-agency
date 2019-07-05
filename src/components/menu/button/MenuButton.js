import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.styleClass = this.props.buttonClass;
    }

    Click(e) {
        e.preventDefault();
        console.log("Click " + "this.id");
    };
    

    Hover(e) {
        e.preventDefault();
        console.log("Hover ");
    };

    render() {
        return (
            <button
                className={`menu-button ${this.styleClass}`}
                onClick={this.Click}
                onMouseOver={this.Hover}
            ></button>
        );
    }
}

MenuButton.propTypes = {
    id: PropTypes.string.isRequired,
    buttonClass: PropTypes.string
};

export default MenuButton;