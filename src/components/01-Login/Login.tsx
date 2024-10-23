import React from "react";
import { IonInput } from "@ionic/react";

import "./Login.css";
const Login: React.FC = () => {
  return (
    <div className="loginForm">
      <div className="loginContents">
        <IonInput
          label="First Name"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter First Name"
        ></IonInput>
        <IonInput
          label="Last Name"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter Last Name"
        ></IonInput>
      </div>
    </div>
  );
};

export default Login;
