import React from "react";
import styled from "styled-components";
import LightContainer from "./LightContainer";

function CalenderBtn({
  date,
  dayOfTheWeek,
  calendarDate,
  push,
  pushBtn,
  pullBtn,
  setReduction,
  reduction,
  diary,
  writtenDiaryBtn,
  setExistDiary,
}) {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const IsItToday =
    todayYear === calendarDate[0] &&
    todayMonth === calendarDate[1] - 1 &&
    todayDate === date;

  const IsItWritten = writtenDiaryBtn.includes(date);

  const openSideWindow = (dayOfTheWeek) => {
    setReduction(true);
    pushBtn(dayOfTheWeek, [calendarDate[0], calendarDate[1] - 1, date]);
    if (diary) {
      if (IsItWritten) {
        setExistDiary(true);
      } else {
        setExistDiary(false);
      }
    }
  };

  const closeSideWindow = () => {
    setReduction(false);
    pullBtn();
  };

  return (
    <Day date={date} reduction={reduction}>
      {push ? (
        <div
          style={{
            position: "relative",
            width: "70px",
            height: "70px",
          }}
        >
          <PushBtn today={IsItToday} onClick={closeSideWindow} diary={diary}>
            <PushFont today={IsItToday} date={date} dayOfTheWeek={dayOfTheWeek}>
              {date}
            </PushFont>
            <ToDoCount date={date} diary={diary}>
              0
            </ToDoCount>
          </PushBtn>
        </div>
      ) : (
        <LightContainer
          tag={
            <Btn
              diary={diary}
              round={diary}
              width={reduction ? 70 : 80}
              height={reduction ? 70 : 80}
              reduction={reduction}
              today={IsItToday}
              IsItWritten={IsItWritten}
              onClick={() => {
                openSideWindow(dayOfTheWeek);
              }}
            >
              <Font
                date={date}
                dayOfTheWeek={dayOfTheWeek}
                reduction={reduction}
              >
                {date}
              </Font>
              <ToDoCount date={date} reduction={reduction} diary={diary}>
                0
              </ToDoCount>
            </Btn>
          }
        />
      )}
    </Day>
  );
}
export default CalenderBtn;

const Day = styled.div`
  margin: ${({ reduction }) =>
    reduction ? "20px 40px 0px 0px" : "30px 50px 0px 0px"};
  pointer-events: ${({ date }) => (date ? "auto" : "none")};
  height: 80px;
`;

const Btn = styled.button`
  width: ${({ reduction }) => (reduction ? "60" : "70")}px;
  height: ${({ reduction }) => (reduction ? "60" : "70")}px;
  border-radius: ${({ diary }) => (diary ? "50%" : "10px")};

  border: ${({ today, IsItWritten, diary }) =>
    diary && IsItWritten
      ? "3px solid #A6B0C6"
      : today
      ? "none"
      : "0.2px solid #ffffff"};
  background: ${({ today }) =>
    today
      ? "linear-gradient(134deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%)"
      : "linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%)"};
  box-shadow: ${({ today }) =>
    today ? "5px 5px 30px #0F296B66" : "5px 5px 20px #0f296b33"};
`;

const PushBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: ${({ diary }) => (diary ? "50%" : "10px")};
  position: absolute;

  background: ${({ today }) =>
    today
      ? "linear-gradient(134deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%)"
      : "linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%)"};
  box-shadow: ${({ today }) =>
    today ? "inset -5px -5px 10px #E8EBF2" : "inset -6px -6px 15px #FFFFFFCC"};
  border: ${({ today }) => (today ? "none" : "0.2px solid #ffffff")};
`;

const Font = styled.div`
  color: ${({ dayOfTheWeek }) =>
    dayOfTheWeek === 0 || dayOfTheWeek % 7 === 0
      ? "red"
      : (dayOfTheWeek + 1) % 7 === 0
      ? "blue"
      : "#707070"};
  display: ${({ date }) => (date === 0 ? "none" : null)};

  font-size: ${({ reduction }) => (reduction ? "12" : "14")}px;
  font-family: SCDream5;
`;

const PushFont = styled.div`
  color: ${({ dayOfTheWeek, today }) =>
    dayOfTheWeek === 0 || dayOfTheWeek % 7 === 0
      ? "red"
      : (dayOfTheWeek + 1) % 7 === 0
      ? "blue"
      : today
      ? "#393939"
      : "#707070"};
  display: ${({ date }) => (date === 0 ? "none" : null)};

  font-size: 12px;
  font-family: GmarketSansBold;
`;

const ToDoCount = styled.div`
  display: ${({ date, diary }) => (date === 0 || diary ? "none" : null)};
  position: absolute;
  right: 7px;
  bottom: 5px;
  z-index: 5;

  color: #707070;
  font-size: ${({ reduction }) => (reduction ? "6" : "7")}px;
  font-family: GmarketSansLight;
`;
