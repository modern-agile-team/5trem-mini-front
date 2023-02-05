import React from "react";
import styled from "styled-components";

function Friend() {
  return (
    <>
      <RightSort></RightSort>
    </>
  );
  //   <XImg />;
}

export default Friend;

const RightSort = styled.div`
  width: 510px;
  height: 34px;
  display: flex;
  flex-direction: row-reverse;
`;
