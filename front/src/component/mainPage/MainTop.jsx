import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import useCounter from "./useCounter";
import SelectMonth from "./SelectMonth";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import arrowHover from "../../assets/arrowHover.svg";
import arrowActive from "../../assets/arrowActive.svg";

function MainTop() {
    const currentDate = new Date();

    const [year, increaseYear, decreaseYear] = useCounter(currentDate.getFullYear());
    const [Month, setMonth] = useState(1);

    return (
        <div style={{ display: "flex", flexDirection: 'column-reverse', width: '100%' }}>
            <div style={{ display: "flex", width: '1100px', margin: '50px auto 0', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: "flex", alignItems: 'center' }}>
                    <YearBtn onClick={decreaseYear} hover={arrowHover} active={arrowActive} style={{ transform: 'rotate( 90deg )', margin: '0px 15px 0px 13px' }}></YearBtn> {/* 왼쪽 */}
                    <Year>{year}</Year>
                    <YearBtn onClick={increaseYear} hover={arrowHover} active={arrowActive} style={{ transform: 'rotate( -90deg )', margin: '0px 13px 0px 15px' }}></YearBtn> {/* 오른쪽 */}
                    <SelectMonth>
                        <MonthBtn><Arrow /></MonthBtn>
                    </SelectMonth>
                </div>
                <div style={{ display: "flex", height: '80px', alignItems: 'flex-end' }} >
                    <StyleTextBtn>친구</StyleTextBtn>
                    <StyleTextBtn>마이페이지</StyleTextBtn>
                    <StyleTextBtn>로그아웃</StyleTextBtn>
                </div>
            </div>
        </div >
    )
}

const StyleTextBtn = styled.div`
    letter-spacing: 0px;
    font-family: GmarketSansMedium;
    padding: 10px 21px;
    color: #707070;
`;

const MonthBtn = styled.button`
    width: 30px;
    height: 30px;

    background: linear-gradient(135deg, #E8EBF2 0%, #F2F3F7 100%);
    box-shadow: 3px 3px 10px #0F296B33;
    border: 0.20000000298023224px solid #FFFFFF;
    border-radius: 5px;
`;

const Year = styled.div`
    font-size: 60px;
    font-family: GmarketSansBold;
    color: #393939;
`;

const YearBtn = styled(Arrow)`
     &:hover {
        content: ${({ hover }) => hover};
     }
`;


export default MainTop;