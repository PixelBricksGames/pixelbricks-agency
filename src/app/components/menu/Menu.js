import React from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = (props) => {

    const OpenMenuAgency = () => {
        console.log("Open Menu Agency");
    }

    const OpenMenuProjects = () => {
        console.log("Open Menu Projects");
    }

    const OpenMenuEmployees = () => {
        console.log("Open Menu Employees");
    }

    const OpenMenuSearchProjects = () => {
        console.log("Open Menu SearchProjects");
    }

    const OpenMenuSearchEmployees = () => {
        console.log("Open Menu SearchEmployees");
    }

    const OpenMenuConfiguration = () => {
        console.log("Open Menu Configuration");
    }

    return (
        <section className="menu">
            <section className="menu--left">
                <MenuButton
                    id="agency"
                    click={OpenMenuAgency}
                />
                <MenuButton
                    id="projects"
                    click={OpenMenuProjects}
                    notifications={props.notifications}
                />
                <MenuButton
                    id="employees"
                    click={OpenMenuEmployees}
                />
                <MenuButton
                    id="search-projects"
                    click={OpenMenuSearchProjects}
                />
                <MenuButton
                    id="search-employees"
                    click={OpenMenuSearchEmployees}
                />
            </section>
            <section className="menu--right">
                <MenuButton
                    id="configuration"
                    click={OpenMenuConfiguration}
                />
            </section>
        </section>
    );
}

Menu.propTypes = {
    notifications: PropTypes.number
};

export default Menu;
