import React from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = (props) => {
    return (
        <section className="menu">
            <section className="menu--left">
                <MenuButton id="agency" buttonClass="menu__button--agency" />
                <MenuButton id="employee" buttonClass="menu__button--employee" />
                <MenuButton id="projects" buttonClass="menu__button--projects" />
                <MenuButton id="tray" buttonClass="menu__button--tray" notifications={props.notifications} />
            </section>

            <section className="menu--right">
                <MenuButton id="configuration" buttonClass="menu__button--configuration" />
                <MenuButton id="pixelbricks" buttonClass="menu__button--pixelbricks" />
            </section>
        </section>
    );
}

Menu.propTypes = {
    notifications: PropTypes.number
};

export default Menu;
