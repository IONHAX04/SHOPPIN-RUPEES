import React, { useState, useEffect } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  cart,
  cartOutline,
  grid,
  gridOutline,
  home,
  homeOutline,
  person,
  personOutline,
  planet,
  planetOutline,
} from "ionicons/icons";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Tab5 from "../../pages/Tab5";
import ViewProduct from "../../pages/ViewProduct/ViewProduct";
import Steppers from "../../pages/Steppers/Stepper";

const MainPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("/");

  useEffect(() => {
    let currentPath = window.location.pathname;
    if (currentPath === "/") {
      currentPath = "/tab1";
    }
    setActiveTab(currentPath);
  }, [activeTab]);

  const shouldShowTabBar = [
    "/",
    "/tab1",
    "/tab2",
    "/tab3",
    "/tab4",
    "/tab5",
  ].includes(location.pathname);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    history.push(path);
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route path="/tab4">
          <Tab4 />
        </Route>
        <Route path="/tab5">
          <Tab5 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tab1" />
        </Route>
        <Route exact path="/viewProducts" component={ViewProduct} />
        <Route exact path="/placeOrderStepper" component={Steppers} />
      </IonRouterOutlet>
      {shouldShowTabBar && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" onClick={() => handleTabClick("/tab1")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab1" ? home : homeOutline}
            />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" onClick={() => handleTabClick("/tab2")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab2" ? planet : planetOutline}
            />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" onClick={() => handleTabClick("/tab3")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab3" ? person : personOutline}
            />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab4" onClick={() => handleTabClick("/tab4")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab4" ? grid : gridOutline}
            />
            <IonLabel>Categories</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab5" onClick={() => handleTabClick("/tab5")}>
            <IonIcon
              aria-hidden="true"
              icon={activeTab === "/tab5" ? cart : cartOutline}
            />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
};

const App: React.FC = () => (
  <IonReactRouter>
    <MainPage />
  </IonReactRouter>
);

export default App;
