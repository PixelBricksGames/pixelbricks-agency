import { connect } from "react-redux";
import Menu from "./../components/menu/Menu";

import { openAgencyWindow } from "./../store/actions/gameWindow.action";

const mapStateToProps = state => ({
	notifications: state.get("menu").workCompleted
});

const mapDispatchToProps = dispatch => ({
	onClickAgency: () => dispatch(openAgencyWindow()),
	onClickProjects: () => dispatch(openAgencyWindow()),
	onClickEmployees: () => dispatch(openAgencyWindow()),
	onClickSearcProjects: () => dispatch(openAgencyWindow()),
	onClickSearchEmployees: () => dispatch(openAgencyWindow()),
	onClickConfiguration: () => dispatch(openAgencyWindow())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);