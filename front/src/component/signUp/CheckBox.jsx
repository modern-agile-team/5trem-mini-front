import React from 'react';
import styled from 'styled-components';
import check from '../../assets/check.png'

function CheckBox({ id, full }) {
    return (
        <StyledLabel htmlFor={id}>
            <StyledInput type="checkbox" id={id} full={full} />
        </StyledLabel>
    );
}

export default CheckBox;

const StyledInput = styled.input`
    appearance: none;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: ${({ full }) => full ? 'linear-gradient(314deg, #DCDEE5 0%, #ADB5C7 100%)' : 'linear-gradient(314deg, #F2F3F7 0%, #E8EBF2 100%)'};
    box-shadow: 3px 3px 6px #0F296B66;

  &:checked {
    background-image: url(${check}),
    ${({ full }) => full ? 'linear-gradient(314deg, #DCDEE5 0%, #ADB5C7 100%)' : 'linear-gradient(314deg, #F2F3F7 0%, #E8EBF2 100%)'};
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.label`
    position: static;
    `;