import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LightContainer from "../../publicCompent/LightContainer";
import diaryApi from "../../api/diaryApi";

function Diary({ pushDiaryBtn, pushBthDay }) {
  const [textHeight, setTextHeight] = useState("");
  const [previewImg, setPreviewImg] = useState("");

  useEffect(() => {
    const container = document.getElementById("container");
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setTextHeight(height);
      }
    });
    observer.observe(container);
  }, []);

  useEffect(() => {
    if (pushDiaryBtn) {
      (async () => {
        const response = await diaryApi.importDiary(pushBthDay);
        document.getElementById("title").value = response.data.title;
        document.getElementById("content").value = response.data.content;
      })();
    }
  }, [pushDiaryBtn]);

  const readImg = (e) => {
    let fileReader = new FileReader();
    let data = e.target;
    fileReader.onload = function (e) {
      let dataURL = fileReader.result;
      // let output = document.getElementById("Img");
      // output.src = dataURL;
      setPreviewImg(dataURL);
    };
    fileReader.readAsDataURL(data.files[0]);
  };

  return (
    <>
      {pushDiaryBtn ? (
        <div style={{ marginTop: "20px" }}>
          <LightContainer
            tag={
              <Container width={567} height={textHeight} id={"container"}>
                <Close>X</Close>
                <TitleTransfrom
                  placeholder={"제목을 입력하세요"}
                  id={"title"}
                ></TitleTransfrom>
                <MainTextTransfrom
                  placeholder={"내용을 입력하세요"}
                  id={"content"}
                ></MainTextTransfrom>
                <input
                  type={"file"}
                  id={"uploadImg"}
                  style={{ display: "none" }}
                  onChange={readImg}
                />
                <div
                  style={{
                    width: "502px",
                    height: "200px",
                    marginTop: "13px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <label htmlFor="uploadImg">
                    <UploadImg
                      pushDiaryBtn={pushDiaryBtn}
                      src={previewImg}
                    ></UploadImg>
                  </label>
                </div>
                <div
                  style={{
                    width: "502px",
                    height: "30px",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Enrollment>등록</Enrollment>
                </div>
              </Container>
            }
          ></LightContainer>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <LightContainer
            tag={
              <Container width={567} height={textHeight} id={"container"}>
                <Close>X</Close>
                <Title placeholder={"제목을 입력하세요"}></Title>

                <input
                  type={"file"}
                  id={"uploadImg"}
                  style={{ display: "none" }}
                  onChange={readImg}
                />
                <div
                  style={{ width: "502px", height: "60px", marginTop: "13px" }}
                >
                  <label htmlFor="uploadImg">
                    <UploadImg src={previewImg}></UploadImg>
                  </label>
                </div>

                <MainText placeholder={"내용을 입력하세요"}></MainText>
                <div
                  style={{
                    width: "502px",
                    height: "30px",
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <Enrollment>등록</Enrollment>
                </div>
              </Container>
            }
          ></LightContainer>
        </div>
      )}
    </>
  );
}
export default Diary;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: #e8ebf2 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 30px #0f296b33;
  border: 0.20000000298023224px solid #ffffff;
  border-radius: 10px;
`;

const Close = styled.div`
  width: 502px;
  height: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
`;

const MainText = styled.textarea`
  width: 502px;
  min-height: 100px;
  max-height: 363px;

  font: 12px/13px GmarketSansMedium;
  color: #838383;
  padding: 10px;
  border: none;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  outline: none;
  resize: vertical;
`;

const MainTextTransfrom = styled.textarea`
  max-width: 502px;
  min-width: 502px;
  min-height: 100px;
  max-height: 215px;
  margin-top: 9px;
  padding: 10px;

  color: #838383;
  font: 12px/13px GmarketSansMedium;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  &:focus {
    max-width: 502px;
    min-width: 502px;
    min-height: 100px;
    max-height: 215px;

    font: 12px/13px GmarketSansMedium;
    color: #838383;
    padding: 10px;
    border: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    outline: none;
    resize: vertical;
  }
`;

const Title = styled.input`
  width: 502px;
  height: 40px;

  padding-left: 6px;
  font: 15px/22px GmarketSansMedium;
  border: none;
  border-bottom: 1px solid #838383;
  background: transparent;
  color: #838383;
  outline: none;
`;

const TitleTransfrom = styled.input`
  width: 502px;
  height: 40px;

  padding-left: 6px;
  font: 15px/22px GmarketSansMedium;
  border: none;
  border-bottom: 1px solid #838383;
  background: transparent;
  color: #838383;
  outline: none;
`;

const UploadImg = styled.img`
  width: ${({ pushDiaryBtn }) => (pushDiaryBtn ? "500" : "50")}px;
  height: ${({ pushDiaryBtn }) => (pushDiaryBtn ? "200" : "50")}px;
`;

const Enrollment = styled.div`
  width: 40px;
  height: 22px;

  padding-left: 7px;
  font: 14px/25px GmarketSansMedium;
  color: #393939;
  background: #cbd2e0;
`;
