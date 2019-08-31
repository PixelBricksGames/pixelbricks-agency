import React from "react";
// import constants from "../../units/constants";

import MenuManager from "../../containers/MenuManager";
import Status from "../status/Status";
import Office from "../office/Office";
import Alert from "../alert/Alert";
import GameWindow from "../game-window/GameWindow";

import "./Root.scss";

const Root = () => (
    <div className="app">
		<MenuManager />
		<Office />
	</div>
);

// class App extends Component {

//     state = {
//         status: {
//             date: new Date(),
//             reputation: 3005,
//             karma: 10,
//             happiness: 70.5,
//             quality: 34.5,
//             money: 125000000
//         },
//         alert: {
//             message: "ola ke ase, ke dise amigo, te vienes a por unas mistas ricas? A ver si tengo ñ y Ñ, no vaya a sér que luego ná.",
//             callback: () => {
//                 console.log("ola");
//             }
//         },
//         gameWindow: {
//             type: constants.GAME_WINDOW.CONFIG.EMPLOYEE,
//             tabs: {},
//             list: {}
// 		}
//     }

//     closeAlert = (e) => {
//         e.preventDefault();
//     }

//     closeWindow = (e) => {
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div className="app">
//                 <Alert {...this.state.alert} />
//                 <GameWindow  {...this.state.gameWindow} />
//                 <MenuManager />
//                 <Status {...this.state.status} />
//                 <Office />
//             </div>
//         );
//     }
// }

export default Root;