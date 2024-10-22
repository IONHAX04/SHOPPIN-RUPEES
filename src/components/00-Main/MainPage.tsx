import { Redirect, Route } from "react-router-dom";
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
  cartOutline,
  ellipse,
  gridOutline,
  homeOutline,
  personOutline,
  planetOutline,
  square,
  triangle,
} from "ionicons/icons";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "../../pages/Tab3";
import Tab4 from "../../pages/Tab4";
import Tab5 from "../../pages/Tab5";

const MainPage: React.FC = () => {
  return (
    <div>
      <IonReactRouter>
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
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={planetOutline} />
              <IonLabel>Explore</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={gridOutline} />
              <IonLabel>Categories</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/tab5">
              <IonIcon aria-hidden="true" icon={cartOutline} />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </div>
  );
};

export default MainPage;
