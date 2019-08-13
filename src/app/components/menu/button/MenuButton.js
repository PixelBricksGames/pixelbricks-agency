import React from "react";
import PropTypes from "prop-types";

import "./MenuButton.scss";

const MenuButton = ({ id, notifications, click, hover }) => {

    const MAX_NOTIFICATIONS_VALUE = "!";
    let notificationsTemplate;

    if (notifications && notifications !== 0) {
        let value = notifications < 10 ? notifications : MAX_NOTIFICATIONS_VALUE;
        notificationsTemplate = <div className="menu-button__notification">{value}</div>;
    }

    return (
        <button
            className={`menu-button menu__button--${id}`}
            onClick={click}
            onMouseOver={hover}
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