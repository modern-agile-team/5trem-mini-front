import React from 'react'
import styled from 'styled-components';

function InputGroup({ title, placeholder }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Wrapper>
                <Input placeholder={placeholder} />
            </Wrapper>
        </Container>
    )
}

export default InputGroup;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

const Light = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;

  transform: translate(-2%, -15%);

  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  filter: blur(4px);
  background-color: white;
`

const Title = styled.h4`
    margin-bottom: 6px;
`

const Wrapper = styled.div`
    position: relative;
`

const Input = styled.input`
    width: 100%;
    height: 60px;
   

    background: transparent linear-gradient(95deg, #E8EBF2 0%, #E8EBF2 0%, #F2F3F7 100%) 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 20px #0F296B33, -5px -5px 20px 10px #fff;
    border: 0.2px solid #FFFFFF;
    border-radius: 10px;
    padding-left: 20px;
    font-family: SCDream5;
    font-size: 20px;
    letter-spacing: 0px;
    color: #707070;
    outline: none;
`