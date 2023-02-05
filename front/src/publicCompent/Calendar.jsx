import React, { useState, useEffect } from "react";
import CalenderBtn from "./CalenderBtn";
import dateCalculation from "../component/mainPage/dateCalculation";
import Diary from "../component/diary/Diary";
import diaryApi from "../api/diaryApi";
import ToDoList from "../component/toDoList/ToDoList";
import toDoListApi from "../api/toDoListApi";

function Calendar({ year, month, reduction, setReduction, diary }) {
  const monthDate = dateCalculation(year, month - 1);

  const [push, setPush] = useState(new Array(42).fill(false));
  const [pushBthDay, setPushBthDay] = useState("");

  const [writtenDiaryBtn, setWrittenDiaryBtn] = useState("");
  const [existDiary, setExistDiary] = useState(false);
  const [changeState, setChangeState] = useState(false);

  const [writtenTodoListBtn, setWrittenTodoListBtn] = useState([]);

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
    if (diary) {
      (async () => {
        setWrittenDiaryBtn(await diaryApi.checkDiary(year, month));
      })();
    } else {
      (async () => {
        setWrittenTodoListBtn(await toDoListApi.getToDoListCount(year, month));
      })();
    }
  }, [year, month, diary, changeState]);

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
              height: "600px",
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
                setExistDiary={setExistDiary}
                writtenTodoListBtn={writtenTodoListBtn}
              />
            ))}
          </div>
          <div
            style={{
              width: "600px",
            }}
          >
            {diary ? (
              <>
                <Diary
                  pushBthDay={pushBthDay}
                  existDiary={existDiary}
                  setReduction={setReduction}
                  setChangeState={setChangeState}
                  changeState={changeState}
                />
              </>
            ) : (
              <ToDoList
                pushBthDay={pushBthDay}
                changeState={changeState}
                setChangeState={setChangeState}
              />
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
                setExistDiary={setExistDiary}
                writtenTodoListBtn={writtenTodoListBtn}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Calendar;
