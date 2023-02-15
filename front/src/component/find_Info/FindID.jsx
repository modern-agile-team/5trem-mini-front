import React, { useState } from "react";
import styled from "styled-components";
import InputText from "../../publicCompent/InputText";
import LightContainer from "../../publicCompent/LightContainer";
import SelectContainer from "../signUp/SelectContainer";
import StyleBtn from "../../publicCompent/StyleBtn";
import findUserInfoApi from "../../api/findUserInfoApi";
import { useNavigate } from "react-router-dom";

function FindID() {
  const navigate = useNavigate();
  const [sentMail, setSentMail] = useState(false);
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("");
  const [showId, setShowId] = useState(false);

  const validEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const findId = async () => {
    const inputEmail =
      document.getElementById("firstEmail").value +
      document.getElementById("secondEmail").value;
    console.log(inputEmail);
    if (validEmail(inputEmail)) {
      const response = await findUserInfoApi.getMyId({ email: inputEmail });
      if (response.success) {
        setSentMail(true);
        setCode(response.authenticationNumber);
        setUserId(response.id);
      } else {
        alert(response.msg);
      }
    } else {
      alert("이메일을 다시 확인해 주세요.");
    }
  };

  const checkCode = () => {
    if (document.getElementById("checkCode").value === String(code)) {
      setShowId(true);
    }
  };

  const moveLogin = () => {
    navigate("/login");
  };

  const moveFindPw = () => {
    navigate("/find-id");
  };

  return (
    <BackGround>
      <StyleHeader>아이디 찾기</StyleHeader>
      {showId ? (
        <>
          <CustomSelect>회원님의 아이디 찾기가 완료 됐습니다.</CustomSelect>
          <CustomSelect style={{ margin: "39px 0 157px 0" }}>
            회원님의 아이디는<UserId>{userId}</UserId>입니다.
          </CustomSelect>
          <LightContainer
            tag={
              <StyleBtn width={400} height={90} onClick={moveLogin}>
                {"로그인"}
              </StyleBtn>
            }
          />
          <div style={{ marginBottom: " 20px" }}></div>
          <LightContainer
            tag={
              <StyleBtn
                width={400}
                height={90}
                onClick={moveFindPw}
                blue={true}
              >
                {"비밀번호 찾기"}
              </StyleBtn>
            }
          />
        </>
      ) : (
        <>
          <CustomSelect>
            아이디는 가입시 입력하신 이메일을 통해 찾을수 있습니다.
          </CustomSelect>
          <EmailInputContainer>
            <LightContainer
              tag={
                <InputText width={295} height={60} id="firstEmail"></InputText>
              }
            />
            @
            <LightContainer
              tag={
                <SelectContainer
                  width={295}
                  height={60}
                  isId="secondEmail"
                ></SelectContainer>
              }
            />
          </EmailInputContainer>
          <CheckCodeContainer>
            {sentMail && (
              <>
                <CustomSelect style={{ margin: "60px 0 40px 0 " }}>
                  입력한 이메일에서 코드를 확인 후 입력해 주세요.
                </CustomSelect>
                <LightContainer
                  tag={
                    <InputText
                      width={260}
                      height={70}
                      id="checkCode"
                    ></InputText>
                  }
                />
              </>
            )}
          </CheckCodeContainer>
          <LightContainer
            tag={
              <StyleBtn
                width={400}
                height={90}
                onClick={sentMail ? checkCode : findId}
              >
                {sentMail ? "확인" : "아이디 찾기"}
              </StyleBtn>
            }
          />
        </>
      )}
    </BackGround>
  );
}

export default FindID;

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleHeader = styled.div`
  color: #393939;
  width: 310px;
  height: 70px;
  margin: 90px 0 122px 0;
  text-align: center;
  font-size: 60px;
  font-family: GmarketSansMedium;
`;

const CustomSelect = styled.div`
  font: 24px/29px GmarketSansMedium;
  color: #707070;
  width: 615px;
  height: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

const EmailInputContainer = styled.div`
  width: 655px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font: 20px/24px GmarketSansMedium;
  color: #707070;
`;

const CheckCodeContainer = styled.div`
  width: 655px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserId = styled.span`
  font: 28px/24px GmarketSansBold;
  color: #707070;
  margin: 0 20px 0 20px;
`;
