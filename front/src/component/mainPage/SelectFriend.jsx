import { useState } from "react";
import styled from "styled-components";
import SelectUl from "../../publicCompent/SelectUl";

function SelectFriend({ children }) {
  const [friendList, setFriendList] = useState([
    "홍길동",
    "유재석",
    "강호동",
    "이현준",
  ]);

  return (
    <SelectUl
      selectList={friendList}
      setSelectList={setFriendList}
      firend={true}
    >
      {children}
    </SelectUl>
  );
}

export default SelectFriend;
