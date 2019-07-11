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
                <div className="status__labels--icon">1</div>
                <div className="status__labels--icon">2</div>
                <div className="status__labels--icon">3</div>
                <div className="status__labels--icon">4</div>
            </div>
            <div className="status__sides"></div>
            <div className="status__info">
                <InfoBar value={props.reputation}/>
                <InfoBar value={props.happines} percentage={true} color="yellow"/>
                <InfoBar value={props.quality} percentage={true} color="green" />
                <InfoBar value={props.money} />
            </div>
            <div className="status__sides"></div>
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
