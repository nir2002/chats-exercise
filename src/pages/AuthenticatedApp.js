import "@reach/dialog/styles.css";
import React from "react";
import Chats from "../containers/Chats";
import "./AuthenticatedApp.css";

function AuthenticatedApp() {
  return (
    <div id="auth-app">
      <Chats />
      <div id="messages">Chat messages</div>
    </div>
  );
}

export default AuthenticatedApp;
