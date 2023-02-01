import React, { useState, useEffect } from "react";
import CalenderBtn from "../component/mainPage/CalenderBtn";
import dateCalculation from "../component/mainPage/dateCalculation";
import Diary from "../component/diary/Diary";
import diaryApi from "../api/diaryApi";

function Calendar({ year, month, reduction, setReduction, diary }) {
  const monthDate = dateCalculation(year, month - 1);

  const [push, setPush] = useState(new Array(42).fill(false));
  const [pushBthDay, setPushBthDay] = useState("");
  const [writtenDiaryBtn, setWrittenDiaryBtn] = useState("");
  const [pushDiaryBtn, setPushDiaryBtn] = useState(false);

  const pushBtn = (index, bthDay) => {
    const pushArr = new Array(42).fill(false);
    pushArr[index] = true;
    setPush(pushArr);
    setPushBthDay(bthDay);
  };

  const pullBtn = () => {
    const pushArr = new Array(42).fill(false);
    setPush(pushArr);
  };

  useEffect(() => {
    pullBtn();
    if (diary) {
      (async () => {
        setWrittenDiaryBtn(await diaryApi.checkDiary(year, month));
      })();
    }
  }, [year, month, diary]);

  useEffect(() => {
    if (!reduction) {
      pullBtn();
    }
  }, [reduction]);

  return (
    <>
      {reduction ? (
        <div
          style={{
            display: "flex",
            width: "1450px",
            margin: "0 auto 0",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "800px",
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
                setReduction={setReduction}
                reduction={reduction}
                diary={diary}
                writtenDiaryBtn={writtenDiaryBtn}
                setPushDiaryBtn={setPushDiaryBtn}
              />
            ))}
          </div>
          <div
            style={{
              width: "600px",
            }}
          >
            {diary ? (
              <Diary pushBthDay={pushBthDay} pushDiaryBtn={pushDiaryBtn} />
            ) : (
              <div>투두리스트 입니다.</div>
            )}
          </div>
        </div>
      ) : (
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
                setReduction={setReduction}
                reduction={reduction}
                diary={diary}
                writtenDiaryBtn={writtenDiaryBtn}
                setPushDiaryBtn={setPushDiaryBtn}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Calendar;
