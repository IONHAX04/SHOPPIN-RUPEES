import { IonApp, setupIonicReact } from "@ionic/react";
import { useEffect, useState } from "react";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./App.css";

// import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";
import MainPage from "./components/00-Main/MainPage";
import Splash from "./components/02-Splash/Splash";
import Login from "./components/01-Login/Login";

setupIonicReact();

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <IonApp>
      {/* {showSplash ? <Splash /> : <Login />} */}
      <MainPage />
    </IonApp>
  );
};

export default App;
