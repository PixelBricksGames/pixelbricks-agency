import constants from "./constants";

export const alert = {
	message: "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.",
	callback: () => {
		console.log("ola");
	}
};

export const gameWindow = {
	type: constants.GAME_WINDOW.CONFIG.EMPLOYEE,
	tabs: [],
	list: []
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