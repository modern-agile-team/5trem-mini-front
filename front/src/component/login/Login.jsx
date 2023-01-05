import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";

function Login() {
    const [userInfo, setUserInfo] = useState({
        id: "",
        password: "",
    });

    const onChangeAccount = (text) => {
        setUserInfo((user) => {
            return { ...user, [text.target.name]: text.target.value };
        });
    };

    // const move = useNavigate();

    return (
        <Main>
            <LoginHeader>로그인</LoginHeader>
            <div style={{ height: '90px' }}>
                <LightContainer width={635} height={67} tag={<InputText name='id' placeholder='아이디' onChange={onChangeAccount} />} />
            </div>
            <div style={{ height: '50px' }}>
                <LightContainer width={635} height={67} tag={<InputText name='password' type='password' placeholder='비밀번호' onChange={onChangeAccount} />} />
            </div>
            <div style={{ height: '130px', width: '645px', display: 'flex', flexDirection: 'row-reverse' }}>
                <div>
                    <StyleBtn>아이디 찾기</StyleBtn>
                    <StyleBtn>비밀번호 찾기</StyleBtn>
                    <StyleBtn right={true} >회원가입</StyleBtn>
                </div>
            </div>
            <div>
                <LightContainer width={400} height={80} tag={<LoginBtn><div style={{ margin: '12px' }}>로그인</div></LoginBtn>} />
            </div>
        </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    background-color: #F2F3F7;
`;

const LoginHeader = styled.h1`
    margin-top: 100px;
    margin-bottom: 80px;

    font-size: 60px;
    font-family: GmarketSansMedium;
`;

const InputText = styled.input`
    width: 621px;
    height: 60px;
    
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: transparent linear-gradient(95deg, #E8EBF2 0%, #E8EBF2 0%, #F2F3F7 100%) 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 20px #0F296B33;
    border: 0.2px solid #FFFFFF;
    border-radius: 10px;
    padding-left: 20px;
    font-family: SCDream5;
    font-size: 20px;
    letter-spacing: 0px;
    color: #707070;
    outline: none;
`;

const StyleBtn = styled.span`
    border-right: ${({ right }) => right ? 'none' : '2px solid #b1a7a7'};

    letter-spacing: 0px;
    font-family: GmarketSansMedium;
    padding: 4px 8px;
    color: #707070;
`;

const LoginBtn = styled.button`
    position: absolute;
    width: 390px;
    height: 70px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    background: transparent linear-gradient(100deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%) 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 20px #0F296B66;
    border: 0px solid #FFFFFF;
    border-radius: 10px;
    font-size: 40px;
    font-family: GmarketSansBold;
`;


export default Login;
