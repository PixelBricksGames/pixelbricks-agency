export const updateGameWindow = gameWindow => ({
	type: "GAME_WINDOW_UPDATE",
	gameWindow
});

export const closeGameWindow = () => ({
	type: "GAME_WINDOW_CLOSE",
	gameWindow: {
		type: undefined
	}
});