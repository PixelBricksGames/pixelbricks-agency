export const closeGameWindow = () => ({
	type: "GAME_WINDOW_CLOSE",
	gameWindow: {}
});

export const setActivePage = index => ({
	type: "GAME_WINDOW_SET_ACTIVE_PAGE",
	index
});

export const openAgencyWindow = (agency, status) => ({
	type: "GAME_WINDOW_OPEN_AGENCY",
	agency,
	status
});

export const openProjectsWindow = (projects, status) => ({
	type: "GAME_WINDOW_OPEN_PROJECTS",
	projects,
	status
});

export const openEmployeesWindow = (employees, status) => ({
	type: "GAME_WINDOW_OPEN_EMPLOYEES",
	employees,
	status
});

export const openConfigurationWindow = () => ({
	type: "GAME_WINDOW_OPEN_CONFIGURATION"
});