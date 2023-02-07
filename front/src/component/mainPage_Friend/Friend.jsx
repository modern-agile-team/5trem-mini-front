import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import StateToggle from "./StateToggle";
import AcceptFriendList from "./AcceptFriendList";
import MyFriend from "./MyFriend";

function Friend() {
  const [stateToggle, setStateToggle] = useState(true);
  const [lightHeight, setLightHeight] = useState("");

  useEffect(() => {
    if (!stateToggle) {
      const container = document.getElementById("container");
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setLightHeight(height);
        }
      });
      observer.observe(container);
    }
  }, [stateToggle]);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <StateToggle stateToggle={stateToggle} setStateToggle={setStateToggle} />
      {stateToggle ? (
        <LightContainer
          tag={
            <div width={456} height={70}>
              <FindeFriendInput placeholder={"닉네임을 검색하세요"} />
              <FindeBtn></FindeBtn>
            </div>
          }
        ></LightContainer>
      ) : (
        <LightContainer
          tag={
            <div width={456} height={lightHeight} id={"container"}>
              <AcceptFriend>
                {/* map이용해서 애들 나오게  */}
                <AcceptFriendList></AcceptFriendList>
              </AcceptFriend>
            </div>
          }
        ></LightContainer>
      )}
      <MyFriend></MyFriend>
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

const FindeBtn = styled.span`
  position: absolute;

  width: 40px;
  height: 22px;
  right: 30px;
  bottom: 17px;
  padding-left: 6px;
  color: #393939;
  background: #cbd2e0;
  border-radius: 4px;
`;

const AcceptFriend = styled.div`
  width: 446px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 13px 0 23px 0;
  background: linear-gradient(108deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.2px solid #ffffff;
  border-radius: 10px;
`;
