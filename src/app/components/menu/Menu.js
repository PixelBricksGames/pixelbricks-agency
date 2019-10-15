import React from "react";
import PropTypes from "prop-types";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = ({ menu,
				game,
				status,
				onClickAgency,
				onClickProjects,
				onClickEmployees,
				onClickSearchProjects,
				onClickSearchEmployees,
				onClickConfiguration
			}) => {

    return (
        <section className="menu">
			<section className="menu--left">
				<MenuButton id="agency" click={() => { onClickAgency(game.agency, status) }} />
				<MenuButton id="projects" click={() => { onClickProjects(game.projects, status) }} notifications={menu.workCompleted} />
				<MenuButton id="employees" click={() => { onClickEmployees(game.employees, status) }} />
				<MenuButton id="search-projects" click={() => { onClickSearchProjects() }} />
				<MenuButton id="search-employees" click={() => { onClickSearchEmployees() }} />
			</section>
			<section className="menu--right">
				<MenuButton id="configuration" click={() => { onClickConfiguration(game.config) }} />
			</section>
		</section>
    );
}

Menu.propTypes = {
	menu: PropTypes.object,
	game: PropTypes.object,
	status: PropTypes.object,
	onClickAgency: PropTypes.func.isRequired,
	onClickProjects: PropTypes.func.isRequired,
	onClickEmployees: PropTypes.func.isRequired,
	onClickSearchProjects: PropTypes.func.isRequired,
	onClickSearchEmployees: PropTypes.func.isRequired,
	onClickConfiguration: PropTypes.func.isRequired
};

export default Menu;
