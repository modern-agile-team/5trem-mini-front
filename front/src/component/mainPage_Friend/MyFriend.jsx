import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useCarousel from "./useCarousel";

function MyFriend(props) {
  const test = [
    ["이미지", "가"],
    ["이미지", "나"],
    ["이미지", "다"],
    ["이미지", "라"],
    ["이미지", "마"],
    ["이미지", "6"],
    ["이미지", "7"],
    ["이미지", "8"],
    ["이미지", "9"],
    ["이미지", "10"],
    ["이미지", "사람이름"],
  ];

  const carousel = useCarousel(test);
  const move = carousel.carouselArr[carousel.carouselIndex];
  return (
    <MyFriendContainer>
      <div
        style={{
          width: "200px",
          height: "118px",
          textAlign: "center",
        }}
      >
        내 친구
      </div>

      <button onClick={carousel.subCarouselIndex}> 왼쪽 </button>
      <div>{carousel.carouselArr[carousel.carouselIndex]}</div>
      <button onClick={carousel.addCarouselIndex}> 오른쪽 </button>

      <FriendContainer>
        {test.map((e, i) => {
          return (
            <FriendInfo
              key={i}
              animate={{ x: move }}
              transition={{
                duration: 0.3,
              }}
            >
              <FriendImg>{e[0]}</FriendImg>
              <FriendName>{e[1]}</FriendName>
            </FriendInfo>
          );
        })}
      </FriendContainer>
    </MyFriendContainer>
  );
}

export default MyFriend;

const MyFriendContainer = styled.div`
  width: 520px;
  height: 275px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 40px 0 36px 0;
  margin-top: 39px;
  background: #d0d6e3;
  border-radius: 30px;

  font: 25px/29px GmarketSansMedium;
`;

const FriendContainer = styled.div`
  width: 420px;
  height: 86px;
  display: flex;

  overflow: hidden;
`;

const FriendInfo = styled(motion.div)`
  width: 90px;
  height: 84px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  transform: ${({ move }) => `translateX(${move}px)`};
`;

const FriendImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: white;
`;

const FriendName = styled.div`
  margin-right: 30px;
  font: 12px/14px GmarketSansMedium;
  color: #5d5d5d;
`;
