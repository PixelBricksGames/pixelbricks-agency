import { connect } from "react-redux";
import GameWindow from "../components/game-window/GameWindow";

import { closeGameWindow } from "./../store/actions/gameWindow.action";
import { setActivePage } from "../store/ducks/gameWindow/setActivePage.duck";

const mapStateToProps = state => state.get("gameWindow");

const mapDispatchToProps = dispatch => ({
	onClose: () => dispatch(closeGameWindow()),
	onClickTab: (index) => dispatch(setActivePage(index)),
	onEditInfoValue: (index) => dispatch(setActivePage(index)),
	onIncrementInfoValue: (index) => dispatch(setActivePage(index)),
	onDecrementInfoValue: (index) => dispatch(setActivePage(index))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameWindow);