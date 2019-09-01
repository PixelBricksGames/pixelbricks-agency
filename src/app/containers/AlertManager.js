import { connect } from "react-redux";
import Alert from "./../components/alert/Alert";
import { updateAlert } from "./../store/actions/alert.action";

let callback;

const mapStateToProps = state => {
	callback = state.get("alert").callback;
	return state.get("alert");
};

const mapDispatchToProps = dispatch => ({
	onClose: () => {
		callback();
		return dispatch(updateAlert({}));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Alert);