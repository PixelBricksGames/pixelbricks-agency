export const closeGameWindow = () => ({
	type: "GAME_WINDOW_CLOSE",
	gameWindow: {}
});

export const openProjectsWindow = (projects, status) => ({
	type: "GAME_WINDOW_OPEN_PROJECTS",
	projects,
	status
});

export const openConfigurationWindow = () => ({
	type: "GAME_WINDOW_OPEN_CONFIGURATION"
});