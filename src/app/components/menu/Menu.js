import React, { Component } from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = ({ notifications }) => {
	const onClick = () => {
		console.log("click");
	};
    return (
        <section className="menu">
                <section className="menu--left">
                    <MenuButton
                        id="agency"
                        click={onClick}
                    />
                    <MenuButton
                        id="projects"
                        click={onClick}
                        notifications={notifications}
                    />
                    <MenuButton
                        id="employees"
                        click={onClick}
                    />
                    <MenuButton
                        id="search-projects"
                        click={onClick}
                    />
                    <MenuButton
                        id="search-employees"
                        click={onClick}
                    />
                </section>
                <section className="menu--right">
                    <MenuButton
                        id="configuration"
                        click={onClick}
                    />
                </section>
            </section>
    );
}

/*
class Menu extends Component {

    // state = {
    // }

    openMenuAgency = (e) => {
        console.log("Open Menu Agency");
    }

    openMenuProjects = (e) => {
        console.log("Open Menu Projects");
    }

    openMenuEmployees = (e) => {
        console.log("Open Menu Employees");
    }

    openMenuSearchProjects = (e) => {
        console.log("Open Menu SearchProjects");
    }

    openMenuSearchEmployees = (e) => {
        console.log("Open Menu SearchEmployees");
    }

    openMenuConfiguration = (e) => {
        // console.log("Open Menu Configuration");
        e.preventDefault();
        // this.setState({
        //     alert: {
        //         message: "Sorry shurmano, pero no hay opciones todavía.",
        //     }
        // });
    }

    render() {
        return (
            <section className="menu">
                <section className="menu--left">
                    <MenuButton
                        id="agency"
                        click={this.openMenuAgency}
                    />
                    <MenuButton
                        id="projects"
                        click={this.openMenuProjects}
                        notifications={this.props.notifications}
                    />
                    <MenuButton
                        id="employees"
                        click={this.openMenuEmployees}
                    />
                    <MenuButton
                        id="search-projects"
                        click={this.openMenuSearchProjects}
                    />
                    <MenuButton
                        id="search-employees"
                        click={this.openMenuSearchEmployees}
                    />
                </section>
                <section className="menu--right">
                    <MenuButton
                        id="configuration"
                        click={this.openMenuConfiguration}
                    />
                </section>
            </section>
        );
    }
}
*/

Menu.propTypes = {
    notifications: PropTypes.number
};

export default Menu;
