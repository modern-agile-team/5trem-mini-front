import React, { useState, useEffect } from "react";
import CalenderBtn from "../component/mainPage/CalenderBtn";
import dateCalculation from "../component/mainPage/dateCalculation";

function Calendar({ year, month }) {
  const monthDate = dateCalculation(year, month - 1);

  const [push, setPush] = useState(new Array(42).fill(false));
  const pushBtn = (index) => {
    const pushArr = new Array(42).fill(false);
    pushArr[index] = true;
    setPush(pushArr);
  };

  const pullBtn = () => {
    const pushArr = new Array(42).fill(false);
    setPush(pushArr);
  };

  useEffect(() => {
    pullBtn();
  }, [year, month]);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "1000px",
          margin: "0 auto 0",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {monthDate.map((value, index) => (
          <CalenderBtn
            key={index}
            date={value}
            dayOfTheWeek={index}
            calendarDate={[year, month]}
            pushBtn={pushBtn}
            pullBtn={pullBtn}
            push={push[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
