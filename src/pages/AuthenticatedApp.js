import "@reach/dialog/styles.css";
import React, { useEffect } from "react";
import Chats from "../containers/Chats";
import "./AuthenticatedApp.css";

function AuthenticatedApp() {
  useEffect(() => {
    window.fetch("/chats").then((res) => console.log(res));
  }, []);
  return (
    <div id="auth-app">
      <Chats />
      <div id="messages">Chat messages</div>
    </div>
  );
}

export default AuthenticatedApp;
