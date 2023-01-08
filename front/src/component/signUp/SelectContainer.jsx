import React, { useState } from 'react';
import styled from 'styled-components';
import arrowimg from '../../assets/arrow.png'

function SelectContainer({ width, height }) {
    const [selectState, setSelectState] = useState(false);
    const openSelect = () => {
        selectState ? setSelectState(false) : setSelectState(true);
    };
    const colseSelect = () => {
        setTimeout(function () {
            setSelectState(false);
        }, 1);
    };
    document.onmousedown = colseSelect;

    return (
        <Container>
            <ImgSort>
                <ArrowImg style={{ position: 'absolute', zIndex: 99 }} trun={selectState} />
            </ImgSort>
            <Select onClick={openSelect} width={width} height={height}>
                <option value="">이메일 선택 </option>
                <option value="naver">naver.com</option>
                <option value="gmail">gmail.com</option>
                <option value="daum">daum.net</option>
            </Select>
        </Container>
    )
}
const Container = styled.div`
  position: relative;
`;

const Select = styled.select`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    position: relative;
    text-align: center;
    background: transparent linear-gradient(95deg, #E8EBF2 0%, #E8EBF2 0%, #F2F3F7 100%) 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 20px #0F296B33;
    border: 0.2px solid #FFFFFF;
    border-radius: 10px;
    font-family: GmarketSansMedium;
    font-size: 20px;
    letter-spacing: 0px;
    color: #707070;
    outline: none;
    appearance: none;
`;


const ArrowImg = styled.img.attrs({
    src: `${arrowimg}`
})`
    transform: ${({ trun }) => trun ? 'rotate(180deg)' : 'none'};
    width: 30px;
    height: 30px;
    margin-top: 15px;
    margin-right: 15px;
    pointer-events: none;
`;

const ImgSort = styled.span`
    display: flex;
    flex-direction: row-reverse;
    /* align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
`;

export default SelectContainer;