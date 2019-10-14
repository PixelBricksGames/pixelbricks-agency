import * as reducerType from "../../../units/reducer.type";

export const setActivePage = index => ({
	type: reducerType.GAME_WINDOW.SET_ACTIVE_PAGE,
	index
});

export const activePage = (state, activeIndex) => {
	const newGameWindow = {
		type: state.type,
		pageList: []
	};
	newGameWindow.pageList = state.pageList.map((page, index) => {
		return {
			...page,
			active: (activeIndex === index) ? true : false
		};
	});
	return newGameWindow;
}