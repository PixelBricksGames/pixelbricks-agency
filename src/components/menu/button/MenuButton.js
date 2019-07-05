import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = (props) => {

    const OnClick = (e) => {
        e.preventDefault();
        console.log("Click " + props.id);
    };
    

    const OnHover = (e) => {
        e.preventDefault();
        console.log("Hover " + props.id);
    };

    return (
        <button
            className={`menu-button ${props.buttonClass}`}
            onClick={OnClick}
            onMouseOver={OnHover}
        ></button>
    );
}

MenuButton.propTypes = {
    id: PropTypes.string.isRequired,
    buttonClass: PropTypes.string
};

export default MenuButton;