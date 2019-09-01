import { connect } from "react-redux";
import GameWindow from "../components/game-window/GameWindow";

import { closeGameWindow } from "./../store/actions/gameWindow.action";

const mapStateToProps = state => state.get("gameWindow");

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(closeGameWindow())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameWindow);