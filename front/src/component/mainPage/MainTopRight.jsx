import React from "react";
import styled from "styled-components";
import SelectFriend from "../../component/mainPage_Friend/SelectFriend";
import { useLocation } from "react-router-dom";

function MainTopRight({ friendViewer, setFriendViewer, refreshFriend }) {
  const location = useLocation();
  const moveFirend = location.pathname === "/mainPage/friend";
  const moveMyPage = false; /* 수정 예정 */

  return (
    <div style={{ display: "flex", height: "80px", alignItems: "flex-end" }}>
      <SelectFriend
        setFriendViewer={setFriendViewer}
        refreshFriend={refreshFriend}
      >
        <StyleTextBtn movePage={moveFirend} friendViewer={friendViewer}>
          친구
        </StyleTextBtn>
      </SelectFriend>
      <StyleTextBtn movePage={moveMyPage}>마이페이지</StyleTextBtn>
      <StyleTextBtn>로그아웃</StyleTextBtn>
    </div>
  );
}

export default MainTopRight;

const StyleTextBtn = styled.div`
  letter-spacing: 0px;
  font-family: ${({ movePage, friendViewer }) =>
    friendViewer || movePage ? "GmarketSansBold" : "GmarketSansMedium"};
  padding: 10px 21px;
  font-size: 25px;
  color: #707070;
  user-select: none;
`;
