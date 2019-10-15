import { connect } from "react-redux";
import Alert from "./../components/alert/Alert";
import { closeAlert } from "./../store/actions/alert.action";

const mapStateToProps = state => state.get("alert");

const mapDispatchToProps = dispatch => ({
	onCloseAlert: () => dispatch(closeAlert())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Alert);