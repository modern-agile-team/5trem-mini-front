import { useState } from "react";

function YearCounter(currentYear) {
  let arr = [];
  for (let i = 0; i < 16; i++) {
    arr[arr.length] = currentYear + i;
  }

  const [yearList, setYearList] = useState(arr);

  const increaseYearList = () =>
    setYearList(
      yearList.map((year, index) => yearList[yearList.length - 1] + index + 1)
    );
  const decreaseYearList = () => {
    const listInMin = Math.min(...yearList);
    setYearList(
      yearList.map((year, index) => listInMin - index - 1).sort((a, b) => a - b)
    );
  };

  return [yearList, increaseYearList, decreaseYearList];
}

export default YearCounter;
