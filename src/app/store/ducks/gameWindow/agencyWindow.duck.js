import * as reducerType from "../../../units/reducer.type";
import { GAME_WINDOW, TABS } from "../../../units/constants";

export const openAgencyWindow = (agency, status) => ({
	type: reducerType.GAME_WINDOW.OPEN_AGENCY,
	agency,
	status
});

export const agencyWindow = (agency, status) => {
	console.log("agency", agency);
	console.log("status", status);
	return {
		type: GAME_WINDOW.TYPE.AGENCY,
		pageList: [{
			tab: TABS.AGENCY_INFO,
			info: [
				["Nombre", agency.name],
				["Dinero", status.money],
				["Karma", status.karma],
				["Reputación", status.reputation],
				["Ranking", "0"],
			],
			active: true
		}]
	}
}