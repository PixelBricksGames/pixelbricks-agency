import { connect } from "react-redux";
import GameWindow from "../components/game-window/GameWindow";

import { closeGameWindow } from "./../store/actions/gameWindow.action";
import { setActivePage } from "../store/ducks/gameWindow/setActivePage.duck";

const mapStateToProps = state => state.get("gameWindow");

const mapDispatchToProps = dispatch => ({
	onClickTab: (index) => dispatch(setActivePage(index)),
	onClose: () => dispatch(closeGameWindow())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameWindow);