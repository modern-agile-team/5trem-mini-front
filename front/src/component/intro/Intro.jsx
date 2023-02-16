import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Intro(props) {
  const [showBtn, setShowBtn] = useState(false);

  const navigate = useNavigate();

  const moveLogin = () => {
    navigate("/login");
  };

  return (
    <IntroWrapper>
      {showBtn && <LoginBtn onClick={() => moveLogin()} />}
      <SkipContainer>
        <SkipBtn onClick={() => moveLogin()}></SkipBtn>
      </SkipContainer>
      <IntroVideo
        src="/video/intro(white).mp4"
        autoPlay
        muted
        pointer-events="none"
        onEnded={() => setShowBtn(true)}
      />
    </IntroWrapper>
  );
}

export default Intro;

const IntroWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IntroVideo = styled.video`
  width: 1600px;
  height: 100%;
`;

const LoginBtn = styled.span`
  background-color: blue;
  position: absolute;
  width: 445px;
  height: 168px;
  cursor: pointer;
  z-index: 99;
`;

const SkipContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 1600px;
  bottom: 30%;
`;

const SkipBtn = styled.div`
  background-color: red;
  position: absolute;
  margin-right: 180px;
  width: 180px;
  height: 50px;

  cursor: pointer;
  z-index: 99;
`;
