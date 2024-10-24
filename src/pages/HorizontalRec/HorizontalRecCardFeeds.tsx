import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonRow,
  IonGrid,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { returnUpForwardOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

interface RestaurantData {
  imageSrc: string;
  name: string;
  isAd?: boolean;
  distance?: string;
  rating?: string;
}

interface RecommendedRestaurantsProps {
  restaurantData: RestaurantData[];
}

const HorizontalRecCardFeeds: React.FC<RecommendedRestaurantsProps> = ({
  restaurantData,
}) => {
  const history = useHistory();

  const handleViewBlog = (blog: any) => {
    history.push({
      pathname: "/viewProducts",
      state: { blog },
    });
  };

  return (
    <div className="recommendationFeeds">
      <div className="headerContent">
        <IonTitle>Festive Picks</IonTitle>
        <IonButtons>
          <IonButton>
            <IonIcon icon={returnUpForwardOutline} />
          </IonButton>
        </IonButtons>
      </div>

      <IonGrid className="restaurant-grid">
        <IonRow className="horizontalScroll">
          {restaurantData.map((restaurant, index) => (
            <IonCol key={index} className="scroll-item">
              <IonCard
                className="restaurant-card"
                onClick={() => handleViewBlog(restaurant)}
              >
                <img
                  alt={`Image of ${restaurant.name}`}
                  src={restaurant.imageSrc}
                  className="restaurant-image"
                />
                <IonCardHeader>
                  <IonCardTitle className="restaurant-title">
                    {restaurant.name}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <div className="restaurantInfo">
                    {restaurant.isAd && <span className="ad-label">Ad</span>}
                    <span className="distance-ratings">
                      {restaurant.distance}
                    </span>
                    <span className="distance-rating">
                      {restaurant.rating}⭐
                    </span>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default HorizontalRecCardFeeds;
