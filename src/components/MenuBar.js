import React, { Component } from "react";

import "../styles/MenuBar.scss";

class MenuBar extends Component {
    render() {
        const date = new Date();
        return (
            <section className="menubar">
                <div className="menubar-agency">
                    <div className="menubar-agency_icon"></div>
                    <div className="menubar-agency_status"></div>
                </div>
                
                <div className="menubar-employees">
                    <div className="menubar-employees_icon"></div>
                    <div className="menubar-employees_status"></div>
                </div>
                <div className="menubar-projects">
                    <div className="menubar-projects_icon"></div>
                    <div className="menubar-projects_status"></div>
                </div>
                
                <div className="menubar-money">
                    <div className="menubar-money_currency"></div>
                    <div className="menubar-money_amount">1.000.000</div>
                </div>

                <div className="menubar-date">
                    DD / MM / YYYY
                </div>
            </section>
        );
    }
}

export default MenuBar;