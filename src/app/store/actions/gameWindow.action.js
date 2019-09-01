export const updateGameWindow = gameWindow => ({
	type: "GAME_WINDOW_UPDATE",
	gameWindow
});

export const closeGameWindow = () => ({
	type: "GAME_WINDOW_CLOSE",
	gameWindow: {}
});

export const openAgencyWindow = () => ({
	type: "GAME_WINDOW_OPEN_AGENCY"
});