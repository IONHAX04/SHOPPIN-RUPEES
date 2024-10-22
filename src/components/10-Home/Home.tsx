import React from "react";

import {
  IonSearchbar,
  IonToolbar,
  IonContent,
  IonRow,
  IonGrid,
  IonCol,
  IonCard,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import {
  cardOutline,
  carOutline,
  cubeOutline,
  fastFoodOutline,
  listOutline,
} from "ionicons/icons";
import IconCards from "../../pages/IconCards/IconCards";

import grocery from "../../assets/home/grocery.svg";
import appliance from "../../assets/home/appliance.svg";
import electronics from "../../assets/home/electronics.svg";
import all from "../../assets/home/all.svg";
import furniture from "../../assets/home/furniture.svg";

import "./Home.css";

const Home: React.FC = () => {
  const iconData = [
    { icon: grocery, name: "Grocery" },
    { icon: appliance, name: "Appliance" },
    { icon: electronics, name: "Electronics" },
    { icon: furniture, name: "Furniture" },
    { icon: all, name: "All" },
  ];

  return (
    <div>
      <IonGrid>
        <IonRow className="horizontalScroll">
          {iconData.map((item, index) => (
            <IconCards key={index} icon={item.icon} name={item.name} />
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Home;
