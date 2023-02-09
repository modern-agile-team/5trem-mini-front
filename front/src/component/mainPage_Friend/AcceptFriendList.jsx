import React from "react";
import styled from "styled-components";
import friendApi from "../../api/friendApi";

function AcceptFriendList({ refreshFriend, friendUserInfo, setrefreshFriend }) {
  const accept = async (connectionNum) => {
    if (await friendApi.acceptfriend({ no: connectionNum })) {
      setrefreshFriend(!refreshFriend);
    }
  };

  const refuse = async (connectionNum) => {
    if (await friendApi.refusefriend({ no: connectionNum })) {
      setrefreshFriend(!refreshFriend);
    }
  };

  return (
    <>
      <Container>
        <FriendNickName> {friendUserInfo.nickname}</FriendNickName>
        <Introduction>님이 친구를 신청했습니다.</Introduction>
      </Container>
      <StateBtnContainer>
        <AcceptBtn onClick={() => accept(friendUserInfo.list_no)}>
          수락
        </AcceptBtn>
        <RefuseBtn onClick={() => refuse(friendUserInfo.list_no)}>
          거절
        </RefuseBtn>
      </StateBtnContainer>
    </>
  );
}
export default AcceptFriendList;

const Container = styled.div`
  width: 320px;
  height: 20px;
  display: flex;
  padding: 0 10px 0 8px;
  margin-top: 13px;
`;

const FriendNickName = styled.div`
  max-width: 115px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font: 15px/17px GmarketSansMedium;
  color: #5f5f5f;
`;

const Introduction = styled.div`
  font: 12px/14px GmarketSansMedium;
  color: #838383;
  margin-left: 6px;
  margin-top: 2px;
`;

const StateBtnContainer = styled.div`
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  margin: 11px 5px 0 0;
`;

const AcceptBtn = styled.div`
  font: 13px/22px GmarketSansMedium;
  width: 42px;
  height: 19px;
  color: #ffffff;
  background: #717e9b;
  border-radius: 4px;
  padding-left: 8px;
`;

const RefuseBtn = styled.div`
  font: 13px/22px GmarketSansMedium;
  width: 42px;
  height: 19px;
  color: #393939;
  background: #bec5d5;
  border-radius: 4px;
  padding-left: 8px;
`;
