import React from "react";

import MenuButton from "./button/MenuButton";

import "./Menu.scss";

const Menu = ({ menu,
				game,
				status,
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
				<MenuButton id="agency" click={() => { onClickAgency(game.agency, status) }} />
				<MenuButton id="projects" click={() => { onClickProjects(game.projects, status) }} notifications={menu.workCompleted} />
				<MenuButton id="employees" click={() => { onClickEmployees(game.employees, status) }} />
				<MenuButton id="search-projects" click={() => { onClickSearcProjects() }} />
				<MenuButton id="search-employees" click={() => { onClickSearchEmployees() }} />
			</section>
			<section className="menu--right">
				<MenuButton id="configuration" click={() => { onClickConfiguration(game.config) }} />
			</section>
		</section>
    );
}

export default Menu;
