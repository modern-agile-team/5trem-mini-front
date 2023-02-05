import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { ReactComponent as CheckImg } from "../../assets/todoCheck.svg";
import { ReactComponent as NoneCheckImg } from "../../assets/todoNoneCheck.svg";
import { ReactComponent as XImg } from "../../assets/todoXImg.svg";
import toDoListApi from "../../api/toDoListApi";

function ToDoItem({ todo }) {
  const [check, setCheck] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
  const todoNo = todo.no;

  useEffect(() => {
    setCheck(Boolean(todo.is_checked));
  }, []);

  const debounceUpdate = debounce(async (e) => {
    if (e.target.id === "title") {
      const data = {
        todoNo,
        title: e.target.value,
        content: content,
      };
      setTitle(e.target.value);
      await toDoListApi.updateToDoList(data);
    } else {
      const data = {
        todoNo,
        title: title,
        content: e.target.value,
      };
      setContent(e.target.value);
      await toDoListApi.updateToDoList(data);
    }
  }, 500);

  return (
    <div style={{ width: "557px", display: "flex", flexWrap: "wrap" }}>
      <StateBtn>
        {!check && <CheckImg onClick={() => setCheck(true)} />}
        {check && <NoneCheckImg onClick={() => setCheck(false)} />}
        <XImg />
      </StateBtn>
      <Title
        check={check}
        defaultValue={title}
        onChange={debounceUpdate}
        id="title"
      ></Title>
      <Content
        check={check}
        defaultValue={content}
        onChange={debounceUpdate}
        id="content"
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
