import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import { ReactComponent as ReadGlass } from "../../assets/readGlass.svg";

function FindFriend(props) {
  return (
    <>
      <LightContainer
        tag={
          <div width={456} height={70}>
            <FindeFriendInput placeholder={"닉네임을 검색하세요"} />
            <FindeImg>
              <ReadGlass />
            </FindeImg>
          </div>
        }
      ></LightContainer>
      <FinedResultContainer>
        <FriendImg></FriendImg>
        <FriendName>친구닉네임</FriendName>
        <LightContainer
          tag={
            <AddFriendBtn width={100} height={40}>
              친구신청
            </AddFriendBtn>
          }
        ></LightContainer>
      </FinedResultContainer>
    </>
  );
}

export default FindFriend;

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

const FindeImg = styled.span`
  position: absolute;

  right: 30px;
  bottom: 17px;
`;

const FinedResultContainer = styled.div`
  width: 200px;
  height: 185px;
  margin-top: 49px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #b8c0d1;
`;

const FriendName = styled.div`
  margin: 15px 0 5px 0;
  font: 20px/23px GmarketSansBold;
  color: #5f5f5f;
`;

const AddFriendBtn = styled.button`
  width: 95px;
  height: 30px;

  font: 15px/17px GmarketSansMedium;
  color: #393939;
  background: linear-gradient(107deg, #e8ebf2 0%, #b8c0d1 0%, #d9deeb 100%);
  box-shadow: 5px 5px 10px #0f296b66;
  border: none;
  border-radius: 7px;
`;
