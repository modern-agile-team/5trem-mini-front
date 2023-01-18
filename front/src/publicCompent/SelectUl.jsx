import { useState } from "react";
import styled from "styled-components";


function SelectUl({ children }) {
    const [show, setShow] = useState(false);
    const toggleUl = () => { setShow(prev => !prev) };
    let test = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12'];

    return (
        <div style={{ paddingBottom: '10px' }}>
            <SelectBtn onClick={toggleUl}>{children}
                {show && (<SelectList>
                    {test.map((value, index) => <SelectItem key={index}>{value}</SelectItem>)}
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

`;

export default SelectUl;