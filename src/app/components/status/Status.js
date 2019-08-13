import React from "react";
import PropTypes from "prop-types";

import RoundCalendar from "./round-calendar/RoundCalendar";
import InfoBar from "./info-bar/InfoBar";

import "./Status.scss";

const Status = ({ date, reputation, karma, happiness, quality, money }) => {

    return (
        <section className="status">
            <RoundCalendar date={date}/>
            <div className="status__labels">
                <div className={`icon__reputation--${karma >= 0 ? "good" : "bad"}`}></div>
                <div className={`icon__happiness--${happiness > 66 ? "good" : happiness < 33 ? "bad" : "neutral"}`}></div>
                <div className={`icon__quality--${quality >= 50 ? "good" : "bad"}`}></div>
                <div className="icon__money"></div>
            </div>
            <div className="status__info">
                <InfoBar value={`${reputation}(${karma > 0 ? "+" : ""}${karma})`}/>
                <InfoBar value={`${happiness}`} percentage={true} />
                <InfoBar value={`${quality}`} percentage={true} />
                <InfoBar value={`${money}`} />
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
