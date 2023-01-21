import React from "react";
import LightContainer from "../../publicCompent/LightContainer";
import StyleBtn from "../../publicCompent/StyleBtn";
function TransfromBtn() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "1000px",
          margin: "30px auto 0",
          //   justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LightContainer
            tag={
              <StyleBtn width={60} height={60} transfrom={true}>
                일기
              </StyleBtn>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TransfromBtn;
