import React, { useState, useCallback, useEffect } from "react";
import MainTop from "../mainPage/MainTop";
import useYearCounter from "../mainPage/useYearCounter";
import TransfromBtn from "../mainPage/TransfromBtn";
import Calendar from "../../publicCompent/Calendar";

function MainPageFriend() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [year, increaseYear, decreaseYear, setYear] =
    useYearCounter(currentYear);
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
      {/* <TransfromBtn
        reduction={true}
        diary={diary}
        setReduction={setReduction}
        setDiary={setDiary}
      />
      <Calendar
        diary={diary}
        reduction={true}
        setReduction={setReduction}
        year={year}
        month={month}
      />
      <div style={{ height: "100px" }} /> */}
    </>
  );
}

export default MainPageFriend;
