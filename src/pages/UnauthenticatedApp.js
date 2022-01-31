import "@reach/dialog/styles.css";
import React from "react";
import { Logo } from "./components/base/Logo";
import { Dialog } from "@reach/dialog";
import LoginForm from "./components/lib/LoginForm";

function UnauthenticatedApp() {
  const [openModal, setOpenModal] = React.useState("none");

  function login(formData) {
    console.log("login", formData);
  }

  function register(formData) {
    console.log("register", formData);
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Logo height={50} width={50} />
        <h1>Whatsapp</h1>
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        <button
          onClick={() => {
            setOpenModal("login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            setOpenModal("register");
          }}
        >
          Register
        </button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <LoginForm onSubmit={login} buttonText="Login" />
        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === "register"}>
        <LoginForm onSubmit={register} buttonText="Register" />

        <div>
          <button onClick={() => setOpenModal("none")}>Close</button>
        </div>
      </Dialog>
    </div>
  );
}

export default UnauthenticatedApp;
