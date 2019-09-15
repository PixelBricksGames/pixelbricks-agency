export const closeGameWindow = () => ({
	type: "GAME_WINDOW_CLOSE",
	gameWindow: {}
});

export const setActivePage = index => ({
	type: "GAME_WINDOW_SET_ACTIVE_PAGE",
	index
});

export const openAgencyWindow = () => ({
	type: "GAME_WINDOW_OPEN_AGENCY"
});

export const openEmployeesWindow = () => ({
	type: "GAME_WINDOW_OPEN_EMPLOYEES"
});