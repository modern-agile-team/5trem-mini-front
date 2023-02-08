import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectMonth from "./SelectMonth";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import LightContainer from "../../publicCompent/LightContainer";
import MainTopRight from "./MainTopRight";
import { useNavigate, useLocation } from "react-router-dom";
import HoverBtn from "../../publicCompent/HoverBtn";

function MainTop({
  year,
  increaseYear,
  decreaseYear,
  month,
  setMonth,
  setYear,
  friendViewer,
  setFriendViewer,
}) {
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
        <div style={{ display: "flex" }}>
          <HoverBtn set={decreaseYear} left={true} />
          <Year
            style={{ width: "165px", height: "80px", paddingTop: "11px" }}
            onClick={moveYearChange}
          >
            {year}
          </Year>
          <HoverBtn set={increaseYear} />
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
        <MainTopRight
          friendViewer={friendViewer}
          setFriendViewer={setFriendViewer}
        />
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
  cursor: pointer;
`;

export default MainTop;
