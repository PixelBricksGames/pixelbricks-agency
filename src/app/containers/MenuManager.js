import { connect } from "react-redux";
import Menu from "./../components/menu/Menu";

import { openAgencyWindow } from "../store/ducks/gameWindow/agencyWindow.duck";
import { openEmployeesWindow } from "../store/ducks/gameWindow/employeesWindow.duck";

const mapStateToProps = state => ({
	menu: state.get("menu"),
	game: state.get("game"),
	status: state.get("status")
});

const mapDispatchToProps = dispatch => ({
	onClickAgency: (agency, status) => dispatch(openAgencyWindow(agency, status)),
	onClickProjects: (projects, status) => dispatch(openProjectsWindow(projects, status)),
	onClickEmployees: (employees, status) => dispatch(openEmployeesWindow(employees, status)),
	onClickSearchProjects: () => dispatch(openAgencyWindow()),
	onClickSearchEmployees: () => dispatch(openAgencyWindow()),
	onClickConfiguration: (config) => dispatch(openConfigurationWindow(config))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);