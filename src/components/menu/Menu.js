import React from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = (props) => {

    const OnClick = (id) => {
        console.log("Click", id);
    };
    

    const OnHover = (id) => {
        console.log("Hover");
    };

    return (
        <section className="menu">
            <section className="menu--left">
                <MenuButton
                    id="agency"
                    click={OnClick}
                />
                <MenuButton
                    id="employee"
                    click={OnClick}
                />
                <MenuButton
                    id="projects"
                    click={OnClick}
                    notifications={props.notifications}
                />
            </section>
            <section className="menu--right">
                <MenuButton
                    id="configuration"
                    click={OnClick}
                />
                <MenuButton
                    id="pixelbricks"
                    click={OnClick}
                    hover={OnHover}
                />
            </section>
        </section>
    );
}

Menu.propTypes = {
    notifications: PropTypes.number
};

export default Menu;
