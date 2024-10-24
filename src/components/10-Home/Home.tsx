import React from "react";

import { IonRow, IonGrid, IonCard } from "@ionic/react";
import IconCards from "../../pages/IconCards/IconCards";

import grocery from "../../assets/home/grocery.svg";
import appliance from "../../assets/home/appliance.svg";
import electronics from "../../assets/home/electronics.svg";
import all from "../../assets/home/all.svg";
import furniture from "../../assets/home/furniture.svg";

import "./Home.css";
import RecommendCards from "../../pages/Recommended/RecommendCards";
import HorizontalRecCardFeeds from "../../pages/HorizontalRec/HorizontalRecCardFeeds";

const Home: React.FC = () => {
  const iconData = [
    { icon: grocery, name: "Grocery" },
    { icon: appliance, name: "Appliance" },
    { icon: electronics, name: "Electronics" },
    { icon: furniture, name: "Furniture" },
    { icon: all, name: "All" },
  ];

  const cardData = {
    imageSrc: "https://ionicframework.com/docs/img/demos/card-media.png",
    title: "Our Recent Offers",
    content:
      "On going offers - 20% if you place order between 10:00 AM to 11:00 AM",
  };

  const restaurantData = [
    {
      header: "Offer Data 1",
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 1",
      isAd: true,
      distance: "$ 224.00",
      rating: "4.5",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 2",
      isAd: false,
      distance: "$ 200.00",
      rating: "4.0",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 3",
      isAd: false,
      distance: "$ 150.00",
      rating: "4.7",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 1",
      isAd: true,
      distance: "$ 90.00",
      rating: "4.5",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 2",
      isAd: false,
      distance: "$ 100.00",
      rating: "4.0",
    },
    {
      imageSrc: "https://via.placeholder.com/100",
      name: "Offer Data 3",
      isAd: false,
      distance: "$ 120.00",
      rating: "4.7",
    },
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

      <IonCard className="ion-margin">
        <RecommendCards
          imageSrc={cardData.imageSrc}
          title={cardData.title}
          content={cardData.content}
        />
      </IonCard>

      <HorizontalRecCardFeeds restaurantData={restaurantData} />
    </div>
  );
};

export default Home;
