import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainSub = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkout = styled.input`
  margin: 2px 0;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid;
  border-radius: 0.35rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #868e96;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;
const Button = styled.button`
  border: none;
  background: none;
  font-weight: bolder;
  margin-top: 10px;
`;

const Register = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: none;
  border: none;
  font-family: SCDream5;
  margin-left: 10px;
`;
const RegisterTitle = styled.div`
  font-size: 20px;
`;

const RegisterMain = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

const StyleInput = styled.input`
  width: 100%;
  background: 1px soild;
  padding: 5px 155px 0px 5px;
  border: none;
  font-family: SCDream5;
  font-size: 12px;
  letter-spacing: 0px;
  margin: 5px 0;
  color: #393939;
  margin-left: 10px;
`;

const MainBox = styled.li`
  display: flex;
  padding-bottom: 25px;
`;

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(todoItem.inputs.title);
  const [newTexts, setNewTests] = useState(todoItem.inputs.main);

  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };

  const onChangeEditInput = (e) => {
    setNewTest(e.target.value);
  };

  const onChangeEditInputs = (e) => {
    setNewTests(e.target.value);
  };
  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => {
      console.log(item);
      return {
        ...item,
        inputs: {
          title: item.id === todoItem.id ? newText : item.inputs.title,
          main: item.id === todoItem.id ? newTexts : item.inputs.main,
        },
      };
    });
    setTodoList(nextTodoList);

    setEdited(false);
  };
  const onClickDeleteButton = () => {
    if (window.confirm("정말로 지우실건가요?")) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };

  return (
    <MainBox className="todoapp__item">
      <MainSub>
        <Checkout
          type="checkbox"
          className="todoapp__item-checkbox"
          checked={todoItem.checked}
          onChange={onChangeCheckbox}
        />
        <Button
          type="button"
          className="todoapp__item-delete-btn"
          onClick={onClickDeleteButton}
        >
          X
        </Button>
        {!todoItem.checked ? (
          edited ? (
            <Button
              type="button"
              className="todoapp__item-edit-btn"
              onClick={onClickSubmitButton}
            >
              ✔
            </Button>
          ) : (
            <Button
              type="button"
              className="todoapp__item-edit-btn"
              onClick={onClickEditButton}
            >
              ✏
            </Button>
          )
        ) : null}
      </MainSub>
      {edited ? (
        <ul>
          <li>
            <StyleInput
              type="text"
              className="todoapp__item-edit-input"
              value={newText}
              ref={editInputRef}
              onChange={onChangeEditInput}
            />
          </li>
          <li>
            <StyleInput
              type="text"
              className="todoapp__item-edit-input"
              value={newTexts}
              ref={editInputRef}
              onChange={onChangeEditInputs}
            />
          </li>
        </ul>
      ) : (
        <Register
          className={`todoapp__item-ctx ${
            todoItem.checked ? "todoapp__item-ctx-checked" : ""
          }`}
        >
          <RegisterTitle>{todoItem.inputs.title}</RegisterTitle>
          <RegisterMain>{todoItem.inputs.main}</RegisterMain>
        </Register>
      )}
    </MainBox>
  );
};

export default ToDoItem;
