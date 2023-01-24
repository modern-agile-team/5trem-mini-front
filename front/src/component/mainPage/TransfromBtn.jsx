import React from "react";
import LightContainer from "../../publicCompent/LightContainer";
import StyleBtn from "../../publicCompent/StyleBtn";
import styled from "styled-components";

function TransfromBtn({ reduction }) {
  return (
    <div style={{ width: "100%" }}>
      <Container reduction={reduction}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LightContainer
            tag={
              <StyleBtn width={60} height={60} transfrom={true}>
                일기
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
  width: ${({ reduction }) => (reduction ? "1450" : "1000")}px;
  margin: 30px auto 0;
  align-items: center;
`;
