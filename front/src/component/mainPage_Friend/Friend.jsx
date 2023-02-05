import React, { useState } from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import StateToggle from "./StateToggle";

function Friend() {
  const [stateToggle, setStateToggle] = useState(true);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <StateToggle stateToggle={stateToggle} setStateToggle={setStateToggle} />
    </div>
  );
}

export default Friend;

const FindeFriendInput = styled.input`
  width: 446px;
  height: 60px;

  font: 15px/17px GmarketSansMedium;
  color: #838383;

  padding: 0 80px 0 33px;
  border: none;
  outline: none;
  background: linear-gradient(97deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.2px solid #ffffff;
  border-radius: 10px;
`;
