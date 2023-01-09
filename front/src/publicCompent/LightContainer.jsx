import React from 'react'
import styled from 'styled-components';
/**
 * 좌측상단 뒤에 빛이 생기는 효과를 주는 함수형 component
 * @param {Tag} children 효과를 받고 싶은 태그
 * @param {Number} width 빛 가로길이(px단위)
 * @param {Number} height 빛 세로길이(px단위)
 * @returns width 및 height 만큼 children tag 뒤에 빛이 나는 효과를 준다.
 */
function LightContainer({ tag, width, height }) {

  return (
    <Container>
      <Light width={width} height={height} />
      <div style={{ position: 'absolute' }} >{tag}</div>
    </Container>
  )
}

export default LightContainer;

const Container = styled.div`
  position: relative;
`;

const Light = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px; 
  top: 46%;
  left: 48%;
  transform: translate(-52%, -54%);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 10px;
  filter: blur(4px);
  background-color: white;
`;