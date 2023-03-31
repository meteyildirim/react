import moment from "moment/moment";
import React from "react";
import "./clock2.scss";

const Clock2 = (props) => {
  const timeStr = moment().format("HH:mm");
  const dateStr = moment().format("LL");
  const dayStr = moment().format("dddd");

  console.log(timeStr, dateStr, dayStr);

  const hour = Number(moment().format("HH"));
  let str = "";

  if (hour > 6 && hour < 11) {
    str = "Morning";
  } else if (hour >= 11 && hour < 14) {
    str = "Noon";
  } else if (hour >= 14 && hour < 17) {
    str = "Afternoon";
  } else if (hour >= 17 && hour <= 19) {
    str = "Evening";
  } else {
    str = "Night";
  }

  const { textColor, bgColor } = props;

  const clockStyle = {
    backgroundColor : bgColor,
    color: textColor
  }

  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time" > {timeStr} </div>

      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr + " " + str} </div>
      </div>
    </div>
  );
};

export default Clock2;
