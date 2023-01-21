import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
function CalenderBtn({ date, dayOfTheWeek }) {
  return (
    <div style={{ margin: "30px 50px 0px 0px" }}>
      <LightContainer
        tag={
          <Btn width={80} height={80}>
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

  background: linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 20px #0f296b33;
  border: 0.2px solid #ffffff;
  border-radius: 10px;
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
