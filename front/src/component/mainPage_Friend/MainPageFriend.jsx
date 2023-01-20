import React, { useState, useCallback, useEffect } from "react";
import MainTop from "../mainPage/MainTop";
import useCounter from "../mainPage/useCounter";

function MainPageFriend() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [year, increaseYear, decreaseYear] = useCounter(currentYear);
  const [month, setMonth] = useState(
    currentMonth >= 10 ? currentMonth : "0" + currentMonth
  );

  return (
    <MainTop
      year={year}
      month={month}
      setMonth={setMonth}
      increaseYear={increaseYear}
      decreaseYear={decreaseYear}
    />
  );
}

export default MainPageFriend;
