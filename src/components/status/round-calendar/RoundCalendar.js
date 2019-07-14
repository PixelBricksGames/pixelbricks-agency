import React, { Component } from "react";
import PropTypes from "prop-types";

import "./RoundCalendar.scss";

const RoundCalendar = (props) => {
    
    const DAYS_PER_GAME_MONTH = 7;
    const HOURS_PER_GAME_MONTH = 24 * DAYS_PER_GAME_MONTH;
    const HOURS_PER_GAME_DAYS = HOURS_PER_GAME_MONTH / 30;
    console.log("HOURS_PER_GAME_DAYS", HOURS_PER_GAME_DAYS);
    console.log("RoundCalendar", props);

    let gameDay = new Date(props.date).getDate();
    let gameMonth = new Date(props.date).getMonth();

    return (
        <div className="round-calendar">
            <div className="round-calendar__day"></div>
            <div className="round-calendar__base"></div>
            <div className="round-calendar__date">
                <div className="round-calendar__date--day">{ gameDay }</div>
                <div className="round-calendar__date--month">JUL</div>
            </div>
        </div>
    );
}

RoundCalendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
};

export default RoundCalendar;
