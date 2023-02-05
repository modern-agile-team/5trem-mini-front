import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// const moveFriend = () => {
//   navigate("/mainPage/friend");
// };

function ViewMore({ setFriendViewer }) {
  return (
    <SelectItem onClick={() => setFriendViewer(true)}>+ 더보기</SelectItem>
  );
}

const SelectItem = styled.li`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  font: 15px Gmarket Sans;
  color: #000000;
  user-select: none;
`;

export default ViewMore;
