import React from "react";
import CalenderBtn from "../component/mainPage/CalenderBtn";
import dateCalculation from "../component/mainPage/dateCalculation";

function Calendar({ year, month }) {
  const monthDate = dateCalculation(year, month - 1);

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
          />
        ))}
      </div>
    </div>
  );
}

export default Calendar;
