import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyleInputTitle = styled.input`
  width: 100%;
  padding: 4px 0 10px 5px;
  background: none;
  border: none;
  font-family: SCDream5;
  font-size: 10px;
`;

const StyleInput = styled.input`
  width: 100%;
  padding: 4px 0 30px 5px;
  background: #ffffff 0% 0%;
  border-radius: 10px;
  font-family: SCDream5;
  border: none;
  font-size: 10px;
  letter-spacing: 0px;
  outline: none;
  margin: 20px 0;
`;
const StyleBtn = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  font-size: 10px;
  background: transparent
    linear-gradient(100deg, #e8ebf2 0%, #b8c0d1 0%, #d9deeb 100%) 0% 0%
    no-repeat padding-box;
  border: 0px solid #ffffff;
  border-radius: 5px;
  font-family: SCDream5;
  float: right;
  padding: 2px 10px;
`;

const StyleTodo = styled.div`
  background: linear-gradient(95deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  border: 0.2px solid #ffffff;
  border-radius: 10px;
  padding: 40px 30px;
  position: relative;
  box-shadow: 5px 5px 20px #0f296b33;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-weight: bolder;
  font-size: 20px;
`;
const ButtonClose = styled.button`
  border: none;
  background: none;
  font-weight: bolder;
  position: absolute;
  right: 3%;
  top: 5%;
  color: #6f6f6f;
`;

const InputBox = ({ todoList, setTodoList }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (event) => {
    setShowPopup(event.target.value);
  };

  const [inputs, setInputs] = useState({
    title: "",
    main: "",
  });

  const { title, main } = inputs;
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      inputs,
      checked: false,
      deleted: false,
    });

    setTodoList(nextTodoList);

    setInputs({
      title: "",
      main: "",
    });
  };

  return (
    <>
      <Button
        className={showPopup ? "ShowButton" : ""}
        onClick={togglePopup}
        value="false"
      >
        +
      </Button>

      {showPopup ? (
        <StyleTodo className="todoapp__inputbox">
          <div className="popup">
            <div className="popup_inner">
              <div className="popBox">
                <StyleInputTitle
                  class
                  type="text"
                  name="title"
                  value={title}
                  ref={inputRef}
                  placeholder="제목을 입력해주세요"
                  className="todoapp__inputbox-inp"
                  onChange={onChangeInput}
                />
                <br></br>
                <StyleInput
                  type="text"
                  name="main"
                  value={main}
                  ref={inputRef}
                  placeholder="내용을 입력해주세요"
                  className="todoapp__inputbox-inp"
                  onChange={onChangeInput}
                />
                <br></br>
                <StyleBtn
                  type="submit"
                  className="todoapp__inputbox-add-btn"
                  onClick={onClickAddButton}
                  retrrn="false"
                >
                  등록
                </StyleBtn>
              </div>
            </div>
          </div>
          <ButtonClose className="close" onClick={togglePopup}>
            ✖
          </ButtonClose>
        </StyleTodo>
      ) : null}
    </>
  );
};

export default InputBox;
