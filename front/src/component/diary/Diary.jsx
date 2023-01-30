import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";

function Diary(props) {
  const test = (e) => {
    console.log(e);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <LightContainer
        tag={
          <Container width={567} height={247}>
            <Close>X</Close>
            <Title onContentSizeChange={test}></Title>
          </Container>
        }
      ></LightContainer>
    </div>
  );
}
export default Diary;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: #e8ebf2 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.20000000298023224px solid #ffffff;
  border-radius: 10px;
`;

const Close = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin-top: 14px;

  display: flex;
  flex-direction: row-reverse;
`;

const Title = styled.textarea`
  width: 502px;
  height: 40px;
`;
