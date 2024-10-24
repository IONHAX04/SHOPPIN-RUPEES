import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowDownOutline,
  chevronDownOutline,
  locationOutline,
  star,
  starHalf,
  trendingDownOutline,
  trendingUpOutline,
  trendingUpSharp,
} from "ionicons/icons";
import React from "react";
import { useLocation } from "react-router-dom";

interface Blog {
  imageSrc: string;
  name: string;
  isAd?: boolean;
  distance?: string;
  rating?: string;
}

interface LocationState {
  blog: Blog | null;
}

const ViewProduct: React.FC = () => {
  const location = useLocation<LocationState>();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>No Blog Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>
            Blog content may be removed by the organization. Please try later{" "}
            <br /> Thank you for your patience.
          </p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{blog.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="productOverview">
          <div className="addressHeader">
            <IonLabel>
              Deliver to : <strong>Sample Address</strong>
            </IonLabel>
            <p>Change</p>
          </div>
          <div className="productRating">
            <h6>Product Category</h6>
            <p>
              Product Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="imageCarousel">
            <img
              src={blog.imageSrc}
              alt={blog.name}
              style={{ inlineSize: "100%" }}
            />
          </div>
          <div className="overallStats">
            <IonIcon icon={trendingUpSharp}></IonIcon>
            <p>500 people ordered this in last 30 days</p>
          </div>
          <div className="divider"></div>

          <div className="productDetailsHeader">
            <p>
              <strong>Product Name</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Veniam, iusto labore?
            </p>
            <div className="ratings">
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={starHalf}></IonIcon>
              <p>|</p>
              <p>4.5</p>
              <p>|</p>
              <p>3,144 Ratings</p>
            </div>
          </div>
          <div className="divider"></div>

          <div className="offerSale">
            <p>Top Discount of the Sale !!</p>
            <div className="pricing">
              <span>
                <IonIcon icon={arrowDownOutline}></IonIcon> 86%
              </span>
              <div className="strikeOut">
                <p>1,199</p>
              </div>
              <div className="price">₹ 159</div>
            </div>
          </div>

          <div className="freeDelivery">
            <p>Free Delivery</p>
            <p>
              Buy Now & Pay Later with credit upto ₹ Lakh.{" "}
              <span>Activate Now</span>
            </p>
          </div>
          <div className="divider"></div>
          <div className="highlights">
            <h5>Highlights</h5>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ViewProduct;
