import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import userPlaceHolder from "../../assets/user-placeholder.png";
import { Search } from "../elements/Search";
import { client } from "../../utils/api-client";
import Spinner from "../elements/Spinner";

export default function ChatList({ selected }) {
  const [filteredChats, setFilteredChats] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    client(`/chats?query=${encodeURIComponent(query)}`).then((data) =>
      setFilteredChats(data)
    );
  }, [query]);

  return (
    <div>
      <Search
        className={searchStyle}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <Spinner />
      {filteredChats?.map(({ id, name }) => (
        <ChatCard active={selected === id} key={id} name={name} />
      ))}
    </div>
  );
}

const ChatCard = ({ name }) => {
  return (
    <div className={cardStyle}>
      <img width={20} height={20} src={userPlaceHolder} alt="user" />
      <span className={cardNameStyle}>{name}</span>
    </div>
  );
};

const cardStyle = css`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

const searchStyle = css`
  margin: 2px;
  border-radius: 5px;
`;

const cardNameStyle = css`
  font-size: 0.5em;
  margin-left: 10px;
`;
