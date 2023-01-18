import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import check from '../../assets/check.png'

function CheckBox({ id, allcheck, checkAccount, checked }) { //, ...attrs  나머지 props 객체로 받게 됨{...attrs}

  return (
    <StyledLabel htmlFor={id}>
      <StyledInput type="checkbox" id={id} allcheck={allcheck} onChange={checkAccount}
        checked={checked} />
    </StyledLabel>
  )

}

export default CheckBox;

const StyledInput = styled.input`
    appearance: none;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: ${({ allcheck }) => allcheck ? 'linear-gradient(314deg, #DCDEE5 0%, #ADB5C7 100%)' : 'linear-gradient(314deg, #F2F3F7 0%, #E8EBF2 100%)'};
    box-shadow: 3px 3px 6px #0F296B66;

  &:checked {
    background-image: url(${check}),
    ${({ allcheck }) => allcheck ? 'linear-gradient(314deg, #DCDEE5 0%, #ADB5C7 100%)' : 'linear-gradient(314deg, #F2F3F7 0%, #E8EBF2 100%)'};
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.label`
    position: static;
    `;