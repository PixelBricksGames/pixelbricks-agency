import React from "react";
import PropTypes from "prop-types";

import RoundCalendar from "./round-calendar/RoundCalendar";
import LiquidBar from "./liquid-bar/LiquidBar";

import "./Status.scss";

const Status = (props) => {
    return (
        <section className="status">
            <RoundCalendar date={props.date}/>
            <div className="status__labels">
                <div className="status__labels--icon">1</div>
                <div className="status__labels--icon">2</div>
                <div className="status__labels--icon">3</div>
                <div className="status__labels--icon">4</div>
            </div>
            <div className="status__ends"></div>
            <div className="status__info">
                <div className="status__value-bar">{props.reputation}</div>
                <LiquidBar color="yellow" value={props.happines}/>
                <LiquidBar color="blue" value={props.quality}/>
                <div className="status__value-bar">{props.money}</div>
            </div>
            <div className="status__ends"></div>
        </section>
    );
};

Status.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    reputation: PropTypes.number.isRequired,
    happines: PropTypes.number.isRequired,
    quality: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired
};

export default Status;
