import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, {keyframes}  from 'styled-components';
import LightContainer from "../../publicCompent/LightContainer";

function Intro() {
    const [event, setEvent] = React.useState(false)

    return (
        <Card1 className={event && 'special_event_on'} onClick={() => setEvent(true)}>
            <Section1>
                <Section2>
                    HARU
                </Section2>
            </Section1>
        </Card1>
    );


}


const Card1 = styled.div`

`
const ChangeMain = keyframes`
from{

    background-color: #343434;
}

to{


    background-color: #F2F3F7;

}

`;


const ChangeText = keyframes`
from{
    color:#fff;
    border-color:#fff;
}

to{
    color:black;
    border-color:black;
}

`;

const Section1  = styled.div`
    background-color: #343434;
    width:100vw;
    height:100vh;
    display:bolck;
    .special_event_on & {
        animation: ${ChangeMain} 1.5s forwards; 

    }


`;


const Section2  = styled.div`
    color:#fff;
    width:210px;
    height:80px;
    border:1.5px solid #FFFFFF;
    display:block;
    border-radius:6px;
    position:absolute;
    text-align:center;
    font-weight:bold;
    font-size:55px;
    cursor: pointer;
    top: calc((100% - 80px) / 2 );
    left: calc((100% - 210px) / 2 );
    .special_event_on & {
        animation: ${ChangeText} 1.5s forwards; 
    }
`;


export default Intro;