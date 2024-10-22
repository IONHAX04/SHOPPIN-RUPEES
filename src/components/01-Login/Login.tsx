import React from "react";
import { IonApp, IonInput } from "@ionic/react";

const Login: React.FC = () => {
  return (
    <div className="loginForm">
      <IonApp>
        <IonInput
          label="Outline input"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter text"
        ></IonInput>
        <input placeholder="testing" />
      </IonApp>
    </div>
  );
};

export default Login;
