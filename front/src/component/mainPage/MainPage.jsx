import React, { useState } from "react";
import MainTop from "./MainTop";
import useCounter from "./useCounter";
import TransfromBtn from "./TransfromBtn";
import Calendar from "../../publicCompent/Calendar";

function MainPage() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [year, increaseYear, decreaseYear, setYear] = useCounter(currentYear);
  const [month, setMonth] = useState(
    currentMonth >= 10 ? currentMonth : "0" + currentMonth
  );

  return (
    <>
      <MainTop
        year={year}
        month={month}
        setMonth={setMonth}
        increaseYear={increaseYear}
        decreaseYear={decreaseYear}
        setYear={setYear}
      />
      <TransfromBtn />
      <Calendar year={year} month={month} />
      <div style={{ height: "100px" }} />
    </>
  );
}

export default MainPage;
