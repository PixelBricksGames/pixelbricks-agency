import React from "react";
import PropTypes from "prop-types";

import RoundCalendar from "./round-calendar/RoundCalendar";
import InfoBar from "./info-bar/InfoBar";

import "./Status.scss";

const Status = (props) => {

    return (
        <section className="status">
            <RoundCalendar date={props.date}/>
            <div className="status__labels">
                <div className={`icon__reputation--${props.karma >= 0 ? "good" : "bad"}`}></div>
                <div className={`icon__happiness--${props.happiness > 66 ? "good" : props.happiness < 33 ? "bad" : "neutral"}`}></div>
                <div className={`icon__quality--${props.quality >= 50 ? "good" : "bad"}`}></div>
                <div className="icon__money"></div>
            </div>
            <div className="status__info">
                <InfoBar value={`${props.reputation}(${props.karma > 0 ? "+" : ""}${props.karma})`}/>
                <InfoBar value={`${props.happiness}`} percentage={true} />
                <InfoBar value={`${props.quality}`} percentage={true} />
                <InfoBar value={`${props.money}`} />
            </div>
        </section>
    );
};

Status.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    reputation: PropTypes.number.isRequired,
    karma: PropTypes.number.isRequired,
    happiness: PropTypes.number.isRequired,
    quality: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired
};

export default Status;
