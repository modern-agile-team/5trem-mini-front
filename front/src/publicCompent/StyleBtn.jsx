import React from 'react'
import styled from 'styled-components';

/**
 * 텍스트 타입의 input styled component
 * @param {Number} width input 가로길이(px단위)
 * @param {Number} height input 세로길이(px단위)
 * @returns width와 height의 값이 적용된 button box
 */
const StyleBtn = styled.button`
    color: #393939;
    position: absolute;
    width: 390px;
    height: 70px;
  
    background: transparent linear-gradient(100deg, #E8EBF2 0%, #B8C0D1 0%, #D9DEEB 100%) 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 20px #0F296B66;
    border: 0px solid #FFFFFF;
    border-radius: 10px;
    font-size: 40px;
    font-family: GmarketSansBold;
`;

export default StyleBtn;