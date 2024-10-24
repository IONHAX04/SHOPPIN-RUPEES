import React from "react";
import { IonButton, IonInput } from "@ionic/react";
import bgImage from "../../assets/login/bgimg.png";

import "./Login.css";
const Login: React.FC = () => {
  const handleLogin = () => {
    localStorage.setItem("login", "true");

    window.location.href = "/tab1";
  };
  return (
    <div className="loginForm" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="loginContents">
        <IonInput
          label="Username"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter Username"
        ></IonInput>
        <IonInput
          label="Password"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter Password"
        ></IonInput>
        <IonButton mode="ios" expand="full" onClick={handleLogin}>
          Login
        </IonButton>
      </div>
    </div>
  );
};

export default Login;
