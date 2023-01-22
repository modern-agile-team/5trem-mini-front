import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
function CalenderBtn({ date, dayOfTheWeek, calendarDate }) {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const IsItToday =
    todayYear === calendarDate[0] &&
    todayMonth === calendarDate[1] - 1 &&
    todayDate === date;

  return (
    <div style={{ margin: "30px 50px 0px 0px" }}>
      <LightContainer
        tag={
          <Btn width={80} height={80} today={IsItToday}>
            <Font date={date} dayOfTheWeek={dayOfTheWeek}>
              {date}
            </Font>
            <ToDoCount date={date}>0</ToDoCount>
          </Btn>
        }
      />
    </div>
  );
}

export default CalenderBtn;

const Btn = styled.button`
  width: 70px;
  height: 70px;
  border: ${({ today }) => (today ? "none" : "0.2px solid #ffffff")};
  border-radius: 10px;
  background: ${({ today }) =>
    today
      ? "linear-gradient(134deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%)"
      : "linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%)"};
  box-shadow: ${({ today }) =>
    today ? "5px 5px 30px #0F296B66" : "5px 5px 20px #0f296b33"};
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
