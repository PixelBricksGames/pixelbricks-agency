import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = (props) => {

    let notificationsTemplate;
    const MAX_NOTIFICATIONS_VALUE = "!"; 

    const OnClick = (e) => {
        e.preventDefault();
        console.log("Click " + props.id);
    };
    

    const OnHover = (e) => {
        e.preventDefault();
        console.log("Hover " + props.id);
    };

    if (props.notifications && props.notifications !== 0) {
        let value = props.notifications < 10 ? props.notifications : MAX_NOTIFICATIONS_VALUE;
        notificationsTemplate = <div className="menu-button__notification">{value}</div>;
    }

    return (
        <button
            className={`menu-button ${props.buttonClass}`}
            onClick={OnClick}
            onMouseOver={OnHover}
        >
            { notificationsTemplate }
        </button>
    );
}

MenuButton.propTypes = {
    id: PropTypes.string.isRequired,
    buttonClass: PropTypes.string,
    notifications: PropTypes.number
};

export default MenuButton;