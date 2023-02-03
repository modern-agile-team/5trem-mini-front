import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as CirclesImg } from "../../assets/circles.svg";
import { ReactComponent as SettingImg } from "../../assets/threeCircles.svg";
import LightContainer from "../../publicCompent/LightContainer";

function Comment(props) {
  const [testShow, setTestShow] = useState(true);

  const [lightHeight, setLightHeight] = useState("");

  useEffect(() => {
    if (testShow) {
      const container = document.getElementById("container");
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setLightHeight(height);
        }
      });
      observer.observe(container);
    }
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      {testShow ? (
        <LightContainer
          tag={
            <CommentContainer width={567} height={lightHeight} id={"container"}>
              <CommentInput2 placeholder={"댓글을 입력하세요"}></CommentInput2>
              <StateBtn2>등록</StateBtn2>
              <LiftCommentContainer>
                <span style={{ position: "relative" }}>
                  <Setting>
                    <SettingImg />
                  </Setting>
                  <CirclesImg />
                </span>
                <Name>홍길동</Name>
                <LiftComment>
                  모던애자일 화이팅. 모던애자일 화이팅. 모던애자일 화이팅.
                  모던애자일 화이팅. 모던애자일 화이팅. 모던애자일 화이팅.
                  모던애자일 화이팅. 모던애자일 화이팅. 모던애자일 화이팅.
                  모던애자일 화이팅. 모던애자일 화이팅. 모던애자일 화이팅.
                  모던애자일 화이팅. 모던애자일 화이팅. 모던애자일 화이팅.
                  모던애자일 화이팅.
                </LiftComment>
              </LiftCommentContainer>
            </CommentContainer>
          }
        />
      ) : (
        <LightContainer
          tag={
            <div width={567} height={70}>
              <CommentInput placeholder={"댓글을 입력하세요"}></CommentInput>
              <StateBtn>등록</StateBtn>
            </div>
          }
        />
      )}
    </div>
  );
}

export default Comment;

const CommentInput = styled.input`
  width: 557px;
  height: 60px;

  font: 13px/21px SCDream4;
  color: #838383;

  padding: 0 80px 0 33px;
  border: none;
  outline: none;
  background: linear-gradient(96deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.2px solid #ffffff;
  border-radius: 10px;
`;

const StateBtn = styled.span`
  position: absolute;

  width: 40px;
  height: 22px;
  right: 30px;
  bottom: 17px;
  padding-left: 6px;
  font: 14px/25px GmarketSansMedium;
  color: #393939;
  background: #cbd2e0;
  border-radius: 4px;
`;

const CommentContainer = styled.div`
  width: 557px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: linear-gradient(103deg, #e8ebf2 0%, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.2px solid #ffffff;
  border-radius: 10px;
`;

const CommentInput2 = styled.input`
  width: 502px;
  height: 40px;

  margin-top: 20px;
  padding: 0 65px 0 6px;
  font: 15px/21px SCDream4;
  border: none;
  border-bottom: 1px solid #838383;
  background: transparent;
  color: #838383;
  outline: none;
`;

const LiftCommentContainer = styled.div`
  width: 480px;
  display: flex;
  margin: 10px 0 10px 0;
`;

const Name = styled.div`
  width: 40px;
  margin: 0 8px 0 8px;
  padding-top: 3px;

  font: 12px/14px GmarketSansMedium;
  color: #5d5d5d;
`;

const LiftComment = styled.div`
  width: 420px;
  padding-top: 3px;
  font: 12px/14px GmarketSansMedium;
  color: #838383;
`;

const Setting = styled.div`
  position: absolute;
  right: 25px;
  bottom: 54px;
`;

const StateBtn2 = styled.span`
  position: absolute;

  width: 40px;
  height: 22px;
  right: 40px;
  top: 30px;
  padding-left: 6px;
  font: 14px/25px GmarketSansMedium;
  color: #393939;
  background: #cbd2e0;
  border-radius: 4px;
`;