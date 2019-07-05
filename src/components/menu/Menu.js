import React, { Component } from "react";
import MenuButton from "./button/MenuButton";

import "./Menu.scss";

class Menu extends Component {
    render() {
        const date = new Date();
        return (
            <section className="menu">
                <MenuButton id="agency" buttonClass="menu__button--agency" />
                <MenuButton id="employee" buttonClass="menu__button--employee" />
                <MenuButton id="projects" buttonClass="menu__button--projects" />

                <MenuButton id="configuration" buttonClass="menu__button--pixelbricks" />
                <MenuButton id="pixelbricks" buttonClass="menu__button--pixelbricks" />
            </section>
        );
    }
}

export default Menu;
