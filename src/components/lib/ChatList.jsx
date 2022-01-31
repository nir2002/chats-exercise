import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import userPlaceHolder from "../../assets/user-placeholder.png";
import { Search } from "../elements/Search";
import { client } from "../../utils/api-client";
import Spinner from "../elements/Spinner";

export default function ChatList({ selected }) {
  const [filteredChats, setFilteredChats] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("loading");
    client(`/chats?query=${encodeURIComponent(query)}`)
      .then((data) => {
        setFilteredChats(data);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [query]);

  return (
    <div>
      <Search
        className={searchStyle}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      {status === "loading" ? <Spinner /> : null}
      {status === "success"
        ? filteredChats?.map(({ id, name }) => (
            <ChatCard active={selected === id} key={id} name={name} />
          ))
        : null}
      {status === "error" ? (
        <div
          className={css`
            font-size: 10px;
            color: red;
            padding: 5px;
          `}
        >
          <p>There was an error:</p>
          <pre>{error}</pre>
        </div>
      ) : null}
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
