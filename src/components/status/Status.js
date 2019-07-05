import React from "react";
import PropTypes from "prop-types";

import RoundCalendar from "./round-calendar/RoundCalendar";
import LiquidBar from "./liquid-bar/LiquidBar";

import "./Status.scss";

const Status = (props) => {
    return (
        <section className="status">
            <RoundCalendar date={props.date} />
            <div className="status__info">
                <div className="status__value-bar--reputation">{props.reputation}</div>
                <LiquidBar color="yellow" value={props.happines}/>
                <LiquidBar color="blue" value={props.quality}/>
                <div className="status__value-bar--money">{props.money}</div>
            </div>
        </section>
    );
};

Status.propTypes = {
    date: PropTypes.string.isRequired,
    reputation: PropTypes.number.isRequired,
    happines: PropTypes.number.isRequired,
    quality: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired
};

export default Status;
