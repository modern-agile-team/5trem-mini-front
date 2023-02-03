import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import useTodolistCounter from "./useTodolistCounter";
import { ReactComponent as ShowEnrollmentBtn } from "../../assets/produceImg.svg";
import { ReactComponent as CloseEnrollmentBtn } from "../../assets/xImg.svg";

function ToDoList({ pushBtn }) {
  // const [count, increaseCount, decreaseCount, setCount] = useTodolistCounter(0);
  const [lightHeight, setLightHeight] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const container = document.getElementById("container");
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setLightHeight(height);
        }
      });
      observer.observe(container);
    }
  }, []);

  useEffect(() => {
    /*1. 투두리스트 get해와서 투두 계수만큼 setCount 하면됨 
    2. 아니면 map이용해서 데이터 받아온거 map으로 컴포넌트 제작하면 됨*/
  }, [pushBtn]);

  return (
    <div style={{ width: "600px", marginTop: "20px" }}>
      {!show && <ShowEnrollmentBtn onClick={() => setShow(true)} />}
      {show && (
        <LightContainer
          tag={
            <TodoListEnrollment
              width={610}
              height={lightHeight}
              id={"container"}
            >
              <RightSort>
                <CloseEnrollmentBtn onClick={() => setShow(false)} />
              </RightSort>
              <Title placeholder={"제목을 입력하세요"}></Title>
              <Content placeholder={"내용을 입력하세요"}></Content>
              <RightSort style={{ margin: "12px 0px 7px 0px" }}>
                <StateBtn>등록</StateBtn>
              </RightSort>
            </TodoListEnrollment>
          }
        ></LightContainer>
      )}
    </div>
  );
}

export default ToDoList;

const TodoListEnrollment = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background: linear-gradient(107deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.20000000298023224px solid #ffffff;
  border-radius: 10px;
`;

const RightSort = styled.div`
  width: 550px;
  height: 34px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const Title = styled.input`
  width: 502px;
  height: 34px;

  padding-left: 6px;
  font: 15px/17px GmarketSansMedium;
  border: none;
  background: transparent;
  color: #838383;
  outline: none;
`;

const Content = styled.textarea`
  width: 502px;
  min-height: 100px;
  max-height: 363px;

  font: 11px/13px SCDream4;
  color: #838383;
  padding: 10px;
  border: none;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  outline: none;
  resize: vertical;
`;

const StateBtn = styled.div`
  width: 40px;
  height: 22px;
  padding-left: 6px;
  font: 14px/25px GmarketSansMedium;
  color: #393939;
  background: #cbd2e0;
  border-radius: 4px;
`;
