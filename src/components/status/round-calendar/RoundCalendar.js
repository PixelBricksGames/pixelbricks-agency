import React from "react";

import "./RoundCalendar.scss";

const RoundCalendar = (props) => {
    return (
        <div className="round-calendar">
            <div>{props.value}</div>
        </div>
    );
};

export default RoundCalendar;
