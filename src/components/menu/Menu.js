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

/*
<div className="menu-money">
                    <div className="menubar-money_currency"></div>
                    <div className="menubar-money_amount">1.000.000</div>
                </div>

                <div className="menu-date">
                    DD / MM / YYYY
                </div>
*/