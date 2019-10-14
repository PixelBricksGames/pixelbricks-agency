import { GAME_WINDOW, GAME_UNITS, TABS } from "./../../units/constants";

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