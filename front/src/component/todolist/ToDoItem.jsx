import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainSub = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkout = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    color: #868e96;
  }

  input[type="checkbox"]:checked + label {
    color: black;
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
  margin-top: 18px;
  width: 0 20px;
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
  margin-left: 3px;
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

  const handleDoubleClick = () => {
    setEdited(true);
  };

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

  const onClickSubmitButton = (e) => {
    if (e.key === "Enter") {
      const nextTodoList = todoList.map((item) => {
        return {
          ...item,
          inputs: {
            title: item.id === todoItem.id ? newText : item.title,
            main: item.id === todoItem.id ? newTexts : item.main,
          },
        };
      });
      setTodoList(nextTodoList);

      setEdited(false);
    }
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
        <Checkout>
          <input
            type="checkbox"
            className="todoapp__item-checkbox"
            checked={todoItem.checked}
            onChange={onChangeCheckbox}
            id="inputName"
          />
          <label for="inputName"> ✔</label>
        </Checkout>

        <Button
          type="button"
          className="todoapp__item-delete-btn"
          onClick={onClickDeleteButton}
        >
          X
        </Button>
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
              onKeyDown={onClickSubmitButton}
            />
          </li>
          <li>
            <StyleInput
              type="text"
              className="todoapp__item-edit-input"
              value={newTexts}
              ref={editInputRef}
              onChange={onChangeEditInputs}
              onKeyDown={onClickSubmitButton}
            />
          </li>
        </ul>
      ) : (
        <Register
          className={`todoapp__item-ctx ${
            todoItem.checked ? "todoapp__item-ctx-checked" : ""
          }`}
        >
          <RegisterTitle onClick={onClickEditButton}>{newText}</RegisterTitle>
          <RegisterMain onClick={onClickEditButton}>{newTexts}</RegisterMain>
        </Register>
      )}
    </MainBox>
  );
};

export default ToDoItem;
