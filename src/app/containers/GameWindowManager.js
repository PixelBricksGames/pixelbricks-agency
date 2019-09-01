import { connect } from "react-redux";
import GameWindow from "../components/game-window/GameWindow";

const mapStateToProps = state => state.get("gameWindow");

export default connect(
	mapStateToProps
)(GameWindow);