import React from "react";
import styled from "styled-components";
import MainTop from "../mainPage/MainTop";
import MainTopRight from "../mainPage/MainTopRight";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/arrowYear.svg";
import YearCounter from "./useYearCounter";

function YearChange() {
  const location = useLocation();
  const year = location.state.year;
  const url = location.state.url;

  const navigate = useNavigate();
  const moveYearChange = (e) => {
    navigate(`${url}`, {
      state: { year: e.target.textContent },
    });
  };

  const [yearList, increaseYearList, decreaseYearList] = YearCounter(year);

  return (
    <>
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
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <MainTopRight />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "1322px",
          margin: "90px auto 0",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "444px",
            width: "200px",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <div style={{ transform: "rotate( 90deg )" }}>
            <Arrow onClick={decreaseYearList} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "444px",
            width: "800px",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {yearList.map((value, index) => (
            <YearText
              viewingYear={value === year}
              key={index}
              onClick={moveYearChange}
            >
              {value}
            </YearText>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            height: "444px",
            width: "200px",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div style={{ transform: "rotate( -90deg )" }}>
            <Arrow onClick={increaseYearList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default YearChange;

const YearText = styled.div`
  width: 170px;
  height: 70px;

  font-size: 60px;
  font-family: ${({ viewingYear }) =>
    viewingYear ? "GmarketSansBold" : "GmarketSansMedium"};
  color: ${({ viewingYear }) => (viewingYear ? "#393939" : "#797979")};
  user-select: none;
  cursor: pointer;
`;
