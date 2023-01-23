import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
function CalenderBtn({
  date,
  dayOfTheWeek,
  calendarDate,
  push,
  pushBtn,
  pullBtn,
}) {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const IsItToday =
    todayYear === calendarDate[0] &&
    todayMonth === calendarDate[1] - 1 &&
    todayDate === date;

  return (
    <Day date={date}>
      {push ? (
        <div
          style={{
            position: "relative",
            width: "80px",
            height: "80px",
          }}
        >
          <PushBtn today={IsItToday} onClick={pullBtn}>
            <PushFont today={IsItToday} date={date} dayOfTheWeek={dayOfTheWeek}>
              {date}
            </PushFont>
            <ToDoCount date={date}>0</ToDoCount>
          </PushBtn>
        </div>
      ) : (
        <LightContainer
          tag={
            <Btn
              width={80}
              height={80}
              today={IsItToday}
              onClick={() => pushBtn(dayOfTheWeek)}
            >
              <Font date={date} dayOfTheWeek={dayOfTheWeek}>
                {date}
              </Font>
              <ToDoCount date={date}>0</ToDoCount>
            </Btn>
          }
        />
      )}
    </Day>
  );
}
export default CalenderBtn;

const Day = styled.div`
  margin: 30px 50px 0px 0px;
  pointer-events: ${({ date }) => (date ? "auto" : "none")};
`;

const Btn = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 10px;

  border: ${({ today }) => (today ? "none" : "0.2px solid #ffffff")};
  background: ${({ today }) =>
    today
      ? "linear-gradient(134deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%)"
      : "linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%)"};
  box-shadow: ${({ today }) =>
    today ? "5px 5px 30px #0F296B66" : "5px 5px 20px #0f296b33"};
`;

const PushBtn = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 10px;
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

  font-size: 14px;
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

  font-size: 14px;
  font-family: GmarketSansBold;
`;

const ToDoCount = styled.div`
  display: ${({ date }) => (date === 0 ? "none" : null)};
  position: absolute;
  right: 7px;
  bottom: 5px;
  z-index: 5;

  color: #707070;
  font-size: 7px;
  font-family: GmarketSansLight;
`;
