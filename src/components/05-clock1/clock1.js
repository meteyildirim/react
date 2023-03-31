import moment from "moment/moment";
import React from "react";
import "./clock1.scss";

const Clock1 = () => {
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

  return (
    <div className="clock-container">
      <div className="time"> {timeStr} </div>

      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr + " " + str} </div>
      </div>
    </div>
  );
};

export default Clock1;
