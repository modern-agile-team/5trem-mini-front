import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import InputText from "../../publicCompent/InputText";
import StyleHeader from "../../publicCompent/StyleHeader";
import StyleBtn from "../../publicCompent/StyleBtn";
import BackGround from "../../publicCompent/BackGround";

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

    const navigate = useNavigate();
    const moveSignUp = () => { navigate('/signUp') }

    const moveMainPage = () => { navigate('/mainPage') }

    return (
        <BackGround>
            <StyleHeader>로그인</StyleHeader>
            <div style={{ height: '90px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='id' placeholder='아이디' onChange={onChangeAccount} />} />
            </div>
            <div style={{ height: '70px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='password' type='password' placeholder='비밀번호' onChange={onChangeAccount} />} />
            </div>
            <div style={{ height: '130px', width: '645px', display: 'flex', flexDirection: 'row-reverse' }}>
                <div>
                    <StyleTextBtn>아이디 찾기</StyleTextBtn>
                    <StyleTextBtn>비밀번호 찾기</StyleTextBtn>
                    <StyleTextBtn right={true} onClick={moveSignUp} >회원가입</StyleTextBtn>
                </div>
            </div>
            <div style={{ height: '207px' }}>
                <LightContainer tag={<StyleBtn width={400} height={80} onClick={moveMainPage} ><div style={{ margin: '12px' }}>로그인</div></StyleBtn>} />
            </div>
        </BackGround>
    );
}

const StyleTextBtn = styled.span`
    border-right: ${({ right }) => right ? 'none' : '2px solid #b1a7a7'};

    letter-spacing: 0px;
    font-family: GmarketSansMedium;
    padding: 4px 8px;
    color: #707070;
`;

export default Login;
