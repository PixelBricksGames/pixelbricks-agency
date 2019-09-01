import React, { Component } from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = ({ notifications,
				onClickAgency,
				onClickProjects,
				onClickEmployees,
				onClickSearcProjects,
				onClickSearchEmployees,
				onClickConfiguration
			}) => {

    return (
        <section className="menu">
			<section className="menu--left">
				<MenuButton id="agency" click={onClickAgency} />
				<MenuButton id="projects" click={onClickProjects} notifications={notifications} />
				<MenuButton id="employees" click={onClickEmployees} />
				<MenuButton id="search-projects" click={onClickSearcProjects} />
				<MenuButton id="search-employees" click={onClickSearchEmployees} />
			</section>
			<section className="menu--right">
				<MenuButton id="configuration" click={onClickConfiguration} />
			</section>
		</section>
    );
}

Menu.propTypes = {
    notifications: PropTypes.number.isRequired
};

export default Menu;
