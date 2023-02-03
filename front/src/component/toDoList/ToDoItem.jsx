import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckImg } from "../../assets/todoCheck.svg";
import { ReactComponent as NoneCheckImg } from "../../assets/todoNoneCheck.svg";
import { ReactComponent as XImg } from "../../assets/todoXImg.svg";

function ToDoItem(props) {
  return (
    <div style={{ width: "557px", display: "flex", flexWrap: "wrap" }}>
      <StateBtn>
        <CheckImg />
        <XImg />
      </StateBtn>
      <Title placeholder={"나중에 지워야 합니다(제목)"}></Title>
      <Content placeholder={"나중에 지워야 합니다(내용)"}></Content>
    </div>
  );
}

export default ToDoItem;

const StateBtn = styled.div`
  width: 20px;
  height: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
  align-items: center;
`;

const Title = styled.input`
  width: 502px;
  height: 35px;

  padding-left: 6px;
  font: 30px/35px GmarketSansMedium;
  border: none;
  background: transparent;
  color: #919191;
  outline: none;
`;

const Content = styled.textarea`
  width: 502px;
  height: 40px;
  margin: 10px 0 0 27px;

  font: 15px/17px SCDream4;
  color: #838383;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
`;
