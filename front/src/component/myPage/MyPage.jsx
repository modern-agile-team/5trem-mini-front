import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import myPageApi from "../../api/myPageApi";
import changePhone from "./changePhone";

function MyPage(props) {
  const [myInfo, setMyInfo] = useState([]);
  const [previewImg, setPreviewImg] = useState("");
  const [imgData, setImgData] = useState("");
  const [isImg, setIsImg] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await myPageApi.getMyInfo();
      setMyInfo([
        { id: "userID", InfoTitle: "ID", content: response.id },
        { id: "password", InfoTitle: "PW", content: response.password },
        { id: "name", InfoTitle: "이름", content: response.name },
        { id: "phone", InfoTitle: "휴대전화", content: response.phone },
        { id: "nickname", InfoTitle: "닉네임", content: response.nickname },
        { id: "email", InfoTitle: "이메일", content: response.email },
      ]);
      setPreviewImg(response.image);
    })();
  }, []);

  useEffect(() => {
    setIsImg(true);
  }, [imgData]);

  const readImg = (e) => {
    const fileReader = new FileReader();
    const data = e.target;
    fileReader.onload = function () {
      const dataURL = fileReader.result;
      setPreviewImg(dataURL);
    };
    fileReader.readAsDataURL(data.files[0]);
    setImgData(data.files[0]);
  };

  const update = async () => {
    const fromData = new FormData();
    fromData.append("image", imgData);
    fromData.append("password", document.getElementById("password").value);
    fromData.append("name", document.getElementById("name").value);
    fromData.append("phone", document.getElementById("phone").value);
    fromData.append("nickname", document.getElementById("nickname").value);
    fromData.append("email", document.getElementById("email").value);
    fromData.append("isImage", isImg);
    await myPageApi.updateMyInfo(fromData);
    // setChangeState(!changeState);
    // setReduction(false);
  };

  return (
    <MyPageContainer>
      <GreetingsContainer>
        {myInfo.length > 0 && <NickName>{myInfo[4].content}</NickName>}
        <Greetings>님 안녕하세요!</Greetings>
      </GreetingsContainer>
      <ImgContainer>
        <input
          type={"file"}
          id={"uploadImg"}
          onChange={readImg}
          style={{ display: "none" }}
        />
        <label htmlFor="uploadImg">
          <LightContainer
            tag={<Img width={210} height={210} round={true} src={previewImg} />}
          />
        </label>
      </ImgContainer>
      <UserInfoContainer>
        {myInfo.map((value) => {
          return (
            <React.Fragment key={value.id}>
              <UserInfoTitle>{value.InfoTitle}</UserInfoTitle>
              <UserInfo
                id={value.id}
                onBlur={
                  value.InfoTitle === "휴대전화"
                    ? changePhone.phoneNumberBlur
                    : null
                }
                onChange={
                  value.InfoTitle === "휴대전화"
                    ? changePhone.phoneNumberChange
                    : null
                }
                defaultValue={value.content}
                readOnly={value.InfoTitle === "ID"}
                type={value.InfoTitle === "PW" ? "password" : null}
              ></UserInfo>
            </React.Fragment>
          );
        })}
      </UserInfoContainer>
      <SortRight>
        <LightContainer
          tag={
            <UpdateBtn width={67} height={40} onClick={update}>
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
