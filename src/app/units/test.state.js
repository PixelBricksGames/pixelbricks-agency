import { GAME_WINDOW, TABS } from "./constants";

export const alert = {
	message: "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.",
	callback: () => {
		console.log("ola");
	}
};

export const gameWindow = {
	type: GAME_WINDOW.CONFIG.EMPLOYEE,
    pageList: [
		{
			tab: TABS.EMPLOYEE_INFO,
			list: ['uno', 'dos', 'tres']
		},{
			tab: TABS.EMPLOYEE_SINGLE,
			list: ['uno', 'dos', 'tres']
		},{
			tab: TABS.EMPLOYEE_DOUBLE,
			list: ['uno', 'dos', 'tres']
		},{
			tab: TABS.EMPLOYEE_FREELANCE,
			list: ['uno', 'dos', 'tres']
		}
	]
};

export const menu = {
	workCompleted: 2
};

export const status = {
	date: new Date(),
	reputation: 3005,
	karma: 10,
	happiness: 70.5,
	quality: 34.5,
	money: 125000000
};