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
                <div className="status__labels--icon_karma-green"></div>
                <div className="status__labels--icon_emoji-happy"></div>
                <div className="status__labels--icon-folder"></div>
                <div className="status__labels--icon-currency"></div>
            </div>
            <div className="status__info">
                <InfoBar value={props.reputation}/>
                <InfoBar value={props.happines} percentage={true} color="#FFCC33"/>
                <InfoBar value={props.quality} percentage={true} color="#9DCE90" />
                <InfoBar value={props.money} />
            </div>
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
