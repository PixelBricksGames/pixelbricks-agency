import React from "react";
import PropTypes from "prop-types";

import "./RoundCalendar.scss";

const RoundCalendar = ({ date }) => {

    const DAYS_PER_GAME_MONTH = 7;
    const HOURS_PER_GAME_MONTH = 24 * DAYS_PER_GAME_MONTH;
    const HOURS_PER_GAME_DAYS = HOURS_PER_GAME_MONTH / 30;
    console.log("HOURS_PER_GAME_DAYS", HOURS_PER_GAME_DAYS);
    console.log("RoundCalendar", date);

    let gameDay = new Date(date).getDate();
    let gameMonth = new Date(date).getMonth();

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
