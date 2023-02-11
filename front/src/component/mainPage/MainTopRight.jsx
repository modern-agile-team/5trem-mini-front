import React from "react";
import styled from "styled-components";
import SelectFriend from "../../component/mainPage_Friend/SelectFriend";

function MainTopRight({
  friendViewer,
  setFriendViewer,
  refreshFriend,
  setMoveFriend,
}) {
  return (
    <div style={{ display: "flex", height: "80px", alignItems: "flex-end" }}>
      <SelectFriend
        setFriendViewer={setFriendViewer}
        refreshFriend={refreshFriend}
        setMoveFriend={setMoveFriend}
      >
        <StyleTextBtn friendViewer={friendViewer}>친구</StyleTextBtn>
      </SelectFriend>
      <StyleTextBtn>마이페이지</StyleTextBtn>
      <StyleTextBtn>로그아웃</StyleTextBtn>
    </div>
  );
}

export default MainTopRight;

const StyleTextBtn = styled.div`
  letter-spacing: 0px;
  font-family: ${({ movePage, friendViewer }) =>
    friendViewer ? "GmarketSansBold" : "GmarketSansMedium"};
  padding: 10px 21px;
  font-size: 25px;
  color: #707070;
  user-select: none;
`;
