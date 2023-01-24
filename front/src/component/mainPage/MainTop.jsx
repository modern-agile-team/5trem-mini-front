import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import SelectMonth from "./SelectMonth";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as ArrowHover } from "../../assets/arrowHover.svg";
import { ReactComponent as ArrowActive } from "../../assets/arrowActive.svg";
import LightContainer from "../../publicCompent/LightContainer";
import MainTopRight from "./MainTopRight";
import { useNavigate, useLocation } from "react-router-dom";

function MainTop({
  year,
  increaseYear,
  decreaseYear,
  month,
  setMonth,
  setYear,
}) {
  const [leftYearBtnHover, setleftYearBtnHover] = useState(false);
  const [rightYearBtnHover, setrightYearBtnHover] = useState(false);
  const [leftclickYearBtn, setleftClickYearBtn] = useState(false);
  const [rightclickYearBtn, setrightClickYearBtn] = useState(false);

  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    if (location.state !== null) {
      const yearChange = Number(location.state.year);
      setYear(yearChange);
    }
  }, []);

  const navigate = useNavigate();
  const moveYearChange = () => {
    navigate("/yearchange", { state: { year, url } });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "1300px",
          margin: "50px auto 0",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            onMouseOver={() => setleftYearBtnHover(true)}
            onMouseOut={() => setleftYearBtnHover(false)}
            onClick={() => setleftClickYearBtn(true)}
            style={{
              transform: "rotate( 90deg )",
              margin: "0px 15px 0px 13px",
            }}
          >
            {leftYearBtnHover ? (
              leftclickYearBtn ? (
                <ArrowActive
                  onMouseOver={() =>
                    setTimeout(() => setleftClickYearBtn(false), 150)
                  }
                />
              ) : (
                <ArrowHover onClick={decreaseYear} />
              )
            ) : (
              <Arrow />
            )}
          </div>
          <Year
            style={{ display: "flex", width: "165px", height: "80px" }}
            onClick={moveYearChange}
          >
            {year}
          </Year>
          <div
            onMouseOver={() => setrightYearBtnHover(true)}
            onMouseOut={() => setrightYearBtnHover(false)}
            onClick={() => setrightClickYearBtn(true)}
            style={{
              transform: "rotate( -90deg )",
              margin: "0px 13px 0px 15px",
            }}
          >
            {rightYearBtnHover ? (
              rightclickYearBtn ? (
                <ArrowActive
                  onMouseOver={() =>
                    setTimeout(() => setrightClickYearBtn(false), 150)
                  }
                />
              ) : (
                <ArrowHover onClick={increaseYear} />
              )
            ) : (
              <Arrow />
            )}
          </div>
          <SelectMonth month={month} setMonth={setMonth}>
            <LightContainer
              tag={
                <MonthBtn style={{ paddingTop: "5px" }} width={40} height={40}>
                  <Arrow />
                </MonthBtn>
              }
            />
          </SelectMonth>
        </div>
        <MainTopRight />
      </div>
    </div>
  );
}

const MonthBtn = styled.button`
  width: 30px;
  height: 30px;

  background: linear-gradient(135deg, #e8ebf2 0%, #f2f3f7 100%);
  box-shadow: 3px 3px 10px #0f296b33;
  border: 0.20000000298023224px solid #ffffff;
  border-radius: 5px;
`;

const Year = styled.div`
  font-size: 60px;
  font-family: GmarketSansBold;
  color: #393939;
  user-select: none;
`;

export default MainTop;
