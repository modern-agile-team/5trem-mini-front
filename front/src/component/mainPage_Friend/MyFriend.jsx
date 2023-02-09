import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useCarousel from "./useCarousel";
import HoverBtn from "../../publicCompent/HoverBtn";
import friendApi from "../../api/friendApi";

function MyFriend({ refreshFriend }) {
  const [firendList, setFirendList] = useState([]);

  useEffect(() => {
    (async () => {
      setFirendList(await friendApi.getFriendList());
    })();
  }, [refreshFriend]);

  const carousel = useCarousel(firendList);
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
      <Absolute left={true}>
        <HoverBtn set={carousel.subCarouselIndex} left={true} />
      </Absolute>
      <Absolute right={true}>
        <HoverBtn set={carousel.addCarouselIndex} />
      </Absolute>
      <FriendContainer>
        {firendList.map((firend, i) => {
          return (
            <FriendInfo
              key={i}
              animate={{ x: move }}
              transition={{
                duration: 0.3,
              }}
            >
              <FriendImg src={firend.image_url}></FriendImg>
              <FriendName>{firend.nickname}</FriendName>
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
  position: relative;

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

const FriendImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: white;
`;

const FriendName = styled.div`
  width: 100px;
  margin-right: 30px;
  font: 12px/14px GmarketSansMedium;
  color: #5d5d5d;

  text-align: center;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Absolute = styled.span`
  position: absolute;
  left: ${({ left }) => left && 2}px;
  right: ${({ right }) => right && 2}px;
  top: 180px;
`;
