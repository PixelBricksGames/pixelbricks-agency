import React from "react";
import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = () => {
    return (
        <section className="menu">
            <section className="menu--left">
                <MenuButton id="agency" buttonClass="menu__button--agency" />
                <MenuButton id="employee" buttonClass="menu__button--employee" />
                <MenuButton id="projects" buttonClass="menu__button--projects" />
            </section>

            <section className="menu--right">
                <MenuButton id="configuration" buttonClass="menu__button--employee" />
                <MenuButton id="pixelbricks" buttonClass="menu__button--pixelbricks" />
            </section>
        </section>
    );
}

export default Menu;
