import { connect } from "react-redux";
import Status from "../components/status/Status";

const mapStateToProps = state => state.get("status");

export default connect(
	mapStateToProps
)(Status);