import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckImg } from "../../assets/todoCheck.svg";
import { ReactComponent as NoneCheckImg } from "../../assets/todoNoneCheck.svg";
import { ReactComponent as XImg } from "../../assets/todoXImg.svg";

function ToDoItem(props) {
  const [check, setCheck] = useState(false);

  return (
    <div style={{ width: "557px", display: "flex", flexWrap: "wrap" }}>
      <StateBtn>
        {!check && <CheckImg onClick={() => setCheck(true)} />}
        {check && <NoneCheckImg onClick={() => setCheck(false)} />}
        <XImg />
      </StateBtn>
      <Title check={check} placeholder={"나중에 지워야 합니다(제목)"}></Title>
      <Content
        check={check}
        placeholder={"나중에 지워야 합니다(내용)"}
      ></Content>
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
  outline: none;
  color: ${({ check }) => (check ? "#919191" : "#393939")};
  text-decoration: ${({ check }) => check && "line-through"};
`;

const Content = styled.textarea`
  width: 502px;
  height: 40px;
  margin: 5px 0 0 27px;

  font: 15px/17px SCDream4;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
  color: ${({ check }) => (check ? "#838383" : "#393939")};
  text-decoration: ${({ check }) => check && "line-through"};
`;
