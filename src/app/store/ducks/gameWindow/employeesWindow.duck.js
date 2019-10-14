import { GAME_WINDOW, GAME_UNITS, TABS } from "../../../units/constants";
import * as reducerType from "../../../units/reducer.type";

export const openEmployeesWindow = (employees, status) => ({
	type: reducerType.GAME_WINDOW.OPEN_EMPLOYEES,
	employees,
	status
});

export const employeesWindow = (employees, status) => {
	console.log("employees", employees);
	console.log("status", status);
	return {
		type: GAME_WINDOW.TYPE.EMPLOYEES,
		pageList: [
			{
				tab: TABS.EMPLOYEES_INFO,
				info: [
					["Felicidad", status.happiness],
					["key2", "value2"],
					["key3", "value3"],
				],
				active: true
			},{
				tab: TABS.EMPLOYEES_SINGLE,
				filter: [GAME_UNITS.ACCOUNT, GAME_UNITS.ARTIST, GAME_UNITS.COPY, GAME_UNITS.PROGRAMMER],
				list: ['uno', 'dos', 'tres'],
				active: false
			},{
				tab: TABS.EMPLOYEES_DOUBLE,
				list: ['uno', 'dos', 'tres'],
				active: false
			},{
				tab: TABS.EMPLOYEES_FREELANCE,
				list: ['uno', 'dos', 'tres'],
				active: false
			}
		]
	}
}