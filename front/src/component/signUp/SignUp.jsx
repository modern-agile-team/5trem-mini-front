import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import BackGround from '../../publicCompent/BackGround';
import LightContainer from "../../publicCompent/LightContainer";
import InputText from "../../publicCompent/InputText";
import StyleHeader from "../../publicCompent/StyleHeader";
import SelectContainer from './SelectContainer';
import CheckBox from './CheckBox';
import StyleBtn from '../../publicCompent/StyleBtn';
import overlap from './overlap';

export default function SignUp() {

    const [checkList, setCheck] = useState({
        fullAgreement: false,
        termsOfUse: false,
        privacy: false,
        sms: false,
        email: false,
    });

    const AllCheck = () => {
        const state = !(checkList.fullAgreement)
        setCheck({
            fullAgreement: state,
            termsOfUse: state,
            privacy: state,
            sms: state,
            email: state,
        })
    }

    const SingleCheck = (e) => {
        const checkListALLTrue = !Object.values(checkList).slice(1, 4).includes(false) && e.target.checked
        if (checkListALLTrue) {
            setCheck({
                fullAgreement: true,
                termsOfUse: true,
                privacy: true,
                sms: true,
                email: true,
            })
        }
        else {
            setCheck((check) => {
                return { ...check, [e.target.id]: e.target.checked }
            })
        }
    };

    useEffect(() => {
        console.log(checkList)
    }, [checkList]);

    const [userInfo, setUserInfo] = useState({
        id: "",
        password: "",
        checkPassword: "",
        name: "",
        nickName: "",
        senterPhoneNum: "",
        lastPhoneNum: "",
        firstEmaile: "",
        lastEmaile: "",
    });

    const onChangeAccount = (e) => {
        setUserInfo((user) => {
            return { ...user, [e.target.name]: e.target.value };
        });
    };

    const [idCheck, idText] = overlap.idCheck(userInfo.id);
    const [nickNameCheck, nickNameText] = overlap.nickNameCheck(userInfo.nickName)
    const [passwordCheck, passwordText] = overlap.passwordCheck(userInfo.password, userInfo.checkPassword);

    const arr = [
        { id: 'termsOfUse', description: "이용약관에 동의 하십니까?", isRequired: true },
        { id: 'privacy', description: "이용약관에 동의 하십니까?", isRequired: true },
        { id: 'sms', description: "이용약관에 동의 하십니까?", isRequired: false },
        { id: 'email', description: "이용약관에 동의 하십니까?", isRequired: false }
    ];
    // useEffect(() => {
    //     const [idCheck, idText] = overlap.idCheck(userInfo.id);
    // }, [userInfo.id]);

    // useEffect(() => {
    //     const [nickNameCheck, nickNameText] = overlap.nickNameCheck(userInfo.nickName);
    // }, [userInfo.nickName]);

    // useEffect(() => {
    //     const [passwordCheck, passwordText] = overlap.passwordCheck(userInfo.password, userInfo.checkPassword);
    // }, [userInfo.checkPassword]);

    return (
        <BackGround>
            <StyleHeader>회원가입</StyleHeader>
            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>아이디</MediumText>
                <DoubleCheckText Check={idCheck}>{idText}</DoubleCheckText>
            </div>
            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='id' onChange={onChangeAccount} />} />
            </div>

            <MediumText style={{ width: '621px' }} >비밀번호</MediumText>
            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='password' type='password' onChange={onChangeAccount} />} />
            </div>

            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>비밀번호 확인</MediumText>
                <DoubleCheckText Check={passwordCheck}>{passwordText}</DoubleCheckText>
            </div>

            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='checkPassword' type='password' onChange={onChangeAccount} />} />
            </div>

            <MediumText style={{ width: '621px' }} >이름</MediumText>
            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='name' onChange={onChangeAccount} />} />
            </div>

            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>닉네임</MediumText>
                <DoubleCheckText Check={nickNameCheck}>{nickNameText}</DoubleCheckText>
            </div>

            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='nickName' onChange={onChangeAccount} />} />
            </div>

            <MediumText style={{ width: '621px' }} >핸드폰</MediumText>
            <div style={{ height: '77px', width: '645px', display: 'flex', flexDirection: 'row' }}>
                <MediumText style={{ marginLeft: '27px', marginRight: '30px' }} lineHeight={60}>
                    010
                </MediumText>
                <MediumText style={{ marginRight: '30px' }} lineHeight={60}>
                    -
                </MediumText>
                <div style={{ marginRight: '30px' }}>
                    <LightContainer tag={<InputText width={215} height={60} name='senterPhoneNum' onChange={onChangeAccount} />} />
                </div>
                <MediumText style={{ marginRight: '30px' }} lineHeight={60}>
                    -
                </MediumText>
                <LightContainer tag={<InputText width={215} height={60} name='lastPhoneNum' onChange={onChangeAccount} />} />
            </div>

            <MediumText style={{ width: '621px' }} >이메일</MediumText>
            <div style={{ height: '130px', width: '645px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '10px' }}></div>
                <LightContainer tag={<InputText width={286} height={60} name='firstEmaile' onChange={onChangeAccount} />} />
                <MediumText style={{ marginLeft: '15px', marginRight: '15px' }} lineHeight={60}>
                    @
                </MediumText>
                <LightContainer tag={<SelectContainer width={287} height={60} name='lastEmaile' onChange={onChangeAccount} />} />
            </div>

            <MediumText style={{ height: '48px', width: '621px', marginLeft: '35px' }} >이용약관 & 수신</MediumText>
            <div style={{ height: '100px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} allcheck={true} id='fullAgreement' checked={!Object.values(checkList).includes(false)} checkAccount={AllCheck} />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45}>전체동의</MediumText>
                {/* checked={!Object.values(checkList).includes(false)} */}
            </div>
            {arr.map((el, i) => {
                return <div key={i} style={{ height: '55px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                    <LightContainer tag={<CheckBox width={40} height={40} round={true} id={el.id} checked={checkList[el.id]} checkAccount={SingleCheck} />} />
                    <MediumText style={{ marginLeft: '10px' }} lineHeight={45} fontSize={16}>{`[${el.isRequired ? "필수" : "선택"}]`}</MediumText>
                    <MediumText style={{ marginLeft: '42px' }} lineHeight={45} fontSize={16}>{el.description}</MediumText>
                </div>
            })}
            <div style={{ height: '80px' }}></div>
            <div style={{ height: '207px' }}>
                <LightContainer tag={<StyleBtn width={400} height={80} ><div style={{ margin: '12px' }}>회원가입</div></StyleBtn>} />
            </div>

        </BackGround >
    )
}

const MediumText = styled.div`
    height: 28px; 
    font-size: ${({ fontSize }) => fontSize ? fontSize : 20}px; 
    line-height: ${({ lineHeight }) => lineHeight ? lineHeight : 24}px;
    font-family: GmarketSansMedium;
    color: #9b9b9b;
    vertical-align: middle;
`;

const DoubleCheckText = styled.div`
    
    color: ${({ Check }) => Check ? 'red' : 'blue'};
    font-size: 15px;
    line-height: 28px;
    font-family: GmarketSansMedium;
`;