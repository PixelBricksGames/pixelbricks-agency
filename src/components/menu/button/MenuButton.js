import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = (props) => {

    const MAX_NOTIFICATIONS_VALUE = "!";
    let notificationsTemplate;

    if (props.notifications && props.notifications !== 0) {
        let value = props.notifications < 10 ? props.notifications : MAX_NOTIFICATIONS_VALUE;
        notificationsTemplate = <div className="menu-button__notification">{value}</div>;
    }

    return (
        <button
            className={`menu-button menu__button--${props.id}`}
            onClick={props.click}
            onMouseOver={props.hover}
        >
            { notificationsTemplate }
        </button>
    );
}

MenuButton.propTypes = {
    id: PropTypes.string.isRequired,
    notifications: PropTypes.number,
    click: PropTypes.func,
    hover: PropTypes.func,
};

MenuButton.defaultProps = {
    id: "",
    notifications: undefined,
    click: f=>f,
    hover: f=>f,
}

export default MenuButton;