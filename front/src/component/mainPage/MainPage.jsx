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

  const [reduction, setReduction] = useState(false);
  const [diary, setDiary] = useState(false);

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
      <TransfromBtn
        reduction={reduction}
        diary={diary}
        setReduction={setReduction}
        setDiary={setDiary}
      />
      <Calendar
        diary={diary}
        reduction={reduction}
        setReduction={setReduction}
        year={year}
        month={month}
      />
      <div style={{ height: "100px" }} />
    </>
  );
}

export default MainPage;
