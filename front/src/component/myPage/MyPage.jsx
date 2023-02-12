import React from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";

function MyPage(props) {
  const userArr = [
    { InfoTitle: "ID", content: "아이디" },
    { InfoTitle: "PW", content: "비밀번호" },
    { InfoTitle: "이름", content: "홍길동" },
    { InfoTitle: "휴대전화", content: "010xxxxxxxx" },
    { InfoTitle: "닉네임", content: "니이익네에에임" },
    { InfoTitle: "이메일", content: "ghdrlfehd@gmail.com" },
  ];

  return (
    <MyPageContainer>
      <GreetingsContainer>
        <NickName>냠냠펀치</NickName>
        <Greetings>님 안녕하세요!</Greetings>
      </GreetingsContainer>
      <ImgContainer>
        <input type={"file"} id={"uploadImg"} style={{ display: "none" }} />
        <label htmlFor="uploadImg">
          <LightContainer tag={<Img width={210} height={210} round={true} />} />
        </label>
      </ImgContainer>
      <UserInfoContainer>
        {userArr.map((value) => {
          return (
            <React.Fragment key={value.InfoTitle}>
              <UserInfoTitle>{value.InfoTitle}</UserInfoTitle>
              <UserInfo defaultValue={value.content}></UserInfo>
            </React.Fragment>
          );
        })}
      </UserInfoContainer>
      <SortRight>
        <LightContainer
          tag={
            <UpdateBtn width={67} height={40}>
              수정
            </UpdateBtn>
          }
        />
      </SortRight>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 570px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
`;

const ImgContainer = styled.div`
  width: 210px;
  height: 220px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 5px 5px 20px #0f296b26;
  background-color: #b8c0d1;
`;

const GreetingsContainer = styled.div`
  width: 430px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const NickName = styled.div`
  height: 25px;
  font: 25px/30px GmarketSansMedium;
  color: #393939;
`;

const Greetings = styled.div`
  height: 15px;
  margin: 8px 0 0 6px;
  font: 15px/18px GmarketSansMedium;
  color: #707070;
`;

const UserInfoContainer = styled.div`
  width: 348px;
  height: 220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  font: 14px/16px GmarketSansMedium;
  color: #707070;
`;

const UserInfoTitle = styled.div`
  width: 80px;
  height: 18px;
`;

const UserInfo = styled.input`
  width: 240px;
  height: 18px;
  border: none;
  background: transparent;
  outline: none;
  font: 14px/16px GmarketSansMedium;
  color: #707070;
`;

const UpdateBtn = styled.div`
  width: 57px;
  height: 30px;
  padding: 8px 0 0 14px;

  background: linear-gradient(117deg, #e8ebf2 0%, #b8c0d1 0%, #d9deeb 100%);
  box-shadow: 5px 5px 10px #0f296b66;
  border-radius: 7px;

  font: 15px/18px GmarketSansMedium;
  color: #393939;
`;

const SortRight = styled.div`
  width: 558px;
  display: flex;
  justify-content: center;
`;
