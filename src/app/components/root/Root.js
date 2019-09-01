import React from "react";

import AlertManager from "../../containers/AlertManager";
import GameWindowManager from "../../containers/GameWindowManager";
import MenuManager from "../../containers/MenuManager";
import StatusManager from "../../containers/StatusManager";
import Office from "../office/Office";

import "./Root.scss";

const Root = () => (
    <main className="app">
		<AlertManager />
		<GameWindowManager />
		<MenuManager />
		<StatusManager />
		<Office />
	</main>
);

export default Root;