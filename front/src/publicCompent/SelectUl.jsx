import { useState, useEffect } from "react";
import styled from "styled-components";


function SelectUl({ children, value, changeValue, selectList, setSelectList }) {
    const [show, setShow] = useState(false);
    const toggleUl = () => { setShow(prev => !prev) };

    const conversion = (e) => {
        selectList = selectList.map((Element) => {
            return Element !== e.target.textContent ? Element : value;
        }).sort((a, b) => a - b);

        setSelectList(selectList);
        changeValue(e.target.textContent);
    };

    return (
        <div style={{ paddingBottom: '10px' }}>
            <SelectBtn onClick={toggleUl}>{children}
                {show && (<SelectList>
                    {selectList.map((value, index) => <SelectItem onClick={conversion} key={index}>{value}</SelectItem>)}
                    <div style={{ paddingBottom: '15px' }}></div>
                </SelectList>)}
            </SelectBtn>
        </div>
    )
}

const SelectBtn = styled.div`
    position: relative;
`;

const SelectList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 81px;
    left: -45px;

    background: rgb(115 115 115 / 75%);
    box-shadow: inset 5px 5px 20px #000000a3, 7px 7px 15px #0000009e;
    backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const SelectItem = styled.li`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    font: 15px Gmarket Sans;
    color: #FFFFFF;
    user-select:none;
`;

export default SelectUl;