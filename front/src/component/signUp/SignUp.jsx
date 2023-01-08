import React from 'react'
import styled from "styled-components";
import BackGround from '../../publicCompent/BackGround';
import LightContainer from "../../publicCompent/LightContainer";
import InputText from "../../publicCompent/InputText";
import StyleHeader from "../../publicCompent/StyleHeader";
import SelectContainer from './SelectContainer';
import CheckBox from './CheckBox';
import StyleBtn from '../../publicCompent/StyleBtn';

export default function SignUp() {

    return (
        <BackGround>
            <StyleHeader>회원가입</StyleHeader>

            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>아이디</MediumText>
                <DoubleCheckText>중복된 아이디 입니다.</DoubleCheckText>
            </div>

            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='id' />} />
            </div>

            <MediumText style={{ width: '621px' }} >비밀번호</MediumText>
            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='password' type='password' />} />
            </div>

            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>비밀번호 확인</MediumText>
                <DoubleCheckText>비밀번호가 일치하지 않습니다.</DoubleCheckText>
            </div>

            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='checkPassword' type='password' />} />
            </div>

            <MediumText style={{ width: '621px' }} >이름</MediumText>
            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='name' />} />
            </div>

            <div style={{ width: '621px', display: 'flex', justifyContent: 'space-between' }}>
                <MediumText>닉네임</MediumText>
                <DoubleCheckText>중복된 닉네임 입니다.</DoubleCheckText>
            </div>

            <div style={{ height: '77px' }}>
                <LightContainer tag={<InputText width={621} height={60} name='nickName' />} />
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
                    <LightContainer tag={<InputText width={215} height={60} name='senterPhoneNum' />} />
                </div>
                <MediumText style={{ marginRight: '30px' }} lineHeight={60}>
                    -
                </MediumText>
                <LightContainer tag={<InputText width={215} height={60} name='lastPhoneNum' />} />
            </div>

            <MediumText style={{ width: '621px' }} >이메일</MediumText>
            <div style={{ height: '130px', width: '645px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '10px' }}></div>
                <LightContainer tag={<InputText width={286} height={60} name='firstEmaile' />} />
                <MediumText style={{ marginLeft: '15px', marginRight: '15px' }} lineHeight={60}>
                    @
                </MediumText>
                <LightContainer tag={<SelectContainer width={287} height={60} name='lastEmaile' />} />
            </div>

            <MediumText style={{ height: '48px', width: '621px', marginLeft: '35px' }} >이용약관 & 수신</MediumText>
            <div style={{ height: '100px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} full={true} id='fullAgreement' />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45}>전체동의</MediumText>
            </div>

            <div style={{ height: '55px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} id='termsOfUse' />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45} fontSize={16}>[필수]</MediumText>
                <MediumText style={{ marginLeft: '42px' }} lineHeight={45} fontSize={16}>이용약관에 동의 하십니까?</MediumText>
            </div>

            <div style={{ height: '55px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} id='' />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45} fontSize={16}>[필수]</MediumText>
                <MediumText style={{ marginLeft: '42px' }} lineHeight={45} fontSize={16}>개인정보 수집 및 이용에 동의 하십니까?</MediumText>
            </div>

            <div style={{ height: '55px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} id='' />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45} fontSize={16}>[선택]</MediumText>
                <MediumText style={{ marginLeft: '42px' }} lineHeight={45} fontSize={16}>SMS 수신을 동의 하십니까?</MediumText>
            </div>

            <div style={{ height: '140px', width: '621px', display: 'flex', flexDirection: 'row' }}>
                <LightContainer tag={<CheckBox width={40} height={40} round={true} id='' />} />
                <MediumText style={{ marginLeft: '10px' }} lineHeight={45} fontSize={16}>[선택]</MediumText>
                <MediumText style={{ marginLeft: '42px' }} lineHeight={45} fontSize={16}>이메일 수신을 동의 하십니까?</MediumText>
            </div>

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
    color: red;
    font-size: 15px;
    line-height: 28px;
    font-family: GmarketSansMedium;
`;
