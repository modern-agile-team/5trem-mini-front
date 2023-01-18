import React from "react";
import styled from "styled-components";
import SelectUl from "../../publicCompent/SelectUl";

function SelectMonth({ children }) {
    return (
        <div style={{ display: "flex", height: '80px', alignItems: 'flex-end' }}>
            <Month>01</Month>
            <SelectUl>{children}</SelectUl>
        </div>)
}

export default SelectMonth;

const Month = styled.div`

    font-size: 40px;
    font-family: GmarketSansMedium;
    color: #707070;
`;