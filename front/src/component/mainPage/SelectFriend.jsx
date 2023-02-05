import { useState } from "react";
import styled from "styled-components";
import SelectUl from "../../publicCompent/SelectUl";

function SelectFriend({ children, setFriendViewer }) {
  const [friendList, setFriendList] = useState([
    ["https://source.unsplash.com/random", "홍길동"],
    ["https://source.unsplash.com/random", "유재석"],
    ["https://source.unsplash.com/random", "강호동"],
    ["https://source.unsplash.com/random", "이현준"],
  ]);

  return (
    <SelectUl
      setFriendViewer={setFriendViewer}
      selectList={friendList}
      setSelectList={setFriendList}
      firend={true}
    >
      {children}
    </SelectUl>
  );
}

export default SelectFriend;
