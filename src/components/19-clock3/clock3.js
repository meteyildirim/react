import moment from "moment/moment";
import React, { useState, useEffect } from "react";
import "./clock3.scss";

const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());

  const timeHour = dateTime.format("HH");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const tiemSec = dateTime.format("ss");
  const tiemMin = dateTime.format("mm");

  useEffect(() => {
    // sadece baslangicta bir defa state her saniyede bir update etmesi gerektigini belirtmesi icin... useEffect kullanlmazsa
    // her renderda setInterval tanimlar ve problem olusturur...
    const timer = setInterval(() => {
      setDateTime(moment());
    }, 1000);
    return () => {
      //setInterval sayfa terkedilse bile calisacaktir... Onun icin unMounting onlemi almak gerekiyor
      clearInterval(timer);
    };
  }, []);

  //console.log(timeStr, dateStr, dayStr);

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
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time"> {timeHour}<span style={{opacity: tiemSec %2 ===0 ?1:0}} >:</span>{tiemMin}</div>

      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr + " " + str} </div>
      </div>
    </div>
  );
};

export default Clock3;
