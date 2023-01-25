import React, { useState, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import InputBox from "../todolist/InputBox";
import ToDoItemList from "../todolist/ToDoItemList";

const StyleTodos = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  padding: 40px 30px;
`;

const Todolist = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <StyleTodos className="homepage__container">
      <ToDoItemList
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />

      <ToDoItemList
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
      <InputBox todoList={todoList} setTodoList={setTodoList} />
    </StyleTodos>
  );
};

export default Todolist;
