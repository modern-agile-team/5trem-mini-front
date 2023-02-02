import React from "react";
import LightContainer from "../../publicCompent/LightContainer";
import StyleBtn from "../../publicCompent/StyleBtn";
import styled from "styled-components";

function TransfromBtn({ reduction, diary, setDiary, setReduction }) {
  const transfrom = () => {
    setDiary((prev) => !prev);
    setReduction(false);
    document.querySelector("body").style.backgroundColor = diary
      ? "#f2f3f7"
      : "#E8EBF2";
  };

  return (
    <div style={{ width: "100%" }}>
      <Container reduction={reduction}>
        <div style={{ display: "flex" }}>
          <LightContainer
            tag={
              <StyleBtn
                width={60}
                height={60}
                transfrom={true}
                diary={diary}
                round={true}
                onClick={transfrom}
              >
                {diary ? "할일" : "일기"}
              </StyleBtn>
            }
          />
        </div>
      </Container>
    </div>
  );
}

export default TransfromBtn;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ reduction }) => (reduction ? "1450" : "1000")}px;
  margin: 30px auto 0;
  align-items: center;
`;
