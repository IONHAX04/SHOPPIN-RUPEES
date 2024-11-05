import React from "react";
import { useHistory } from "react-router-dom";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import {
  arrowDownOutline,
  star,
  starHalf,
  trendingUpSharp,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import AccordionGroup from "../Accordion/AccordionGroup";

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

  const history = useHistory();

  const accordionData = [
    {
      value: "first",
      header: "Top Highlights",
      content: [
        { label: "Brand", value: "Example Brand" },
        { label: "Operating System", value: "Example OS" },
        { label: "RAM Memory Installed", value: "8GB" },
        { label: "CPU Model", value: "Example CPU" },
        { label: "CPU Speed", value: "2.5 GHz" },
        { label: "Memory Storage", value: "256GB" },
      ],
    },
    {
      value: "second",
      header: "Product Specifications",
      content: [
        { label: "High-resolution display", value: "" },
        { label: "Long battery life", value: "" },
        { label: "Lightweight and portable", value: "" },
        { label: "Advanced security features", value: "" },
        { label: "Durable and robust design", value: "" },
      ],
    },
    {
      value: "third",
      header: "Warranty & Others",
      content: [
        { label: "Warranty Period", value: "1 Year" },
        { label: "Manufacturing Date", value: "January 2024" },
        { label: "Customer Support", value: "24/7 available" },
        { label: "Repair and Return Policy", value: "30 days return" },
      ],
    },
  ];

  const handlePlaceOrder = () => {
    history.push({
      pathname: "/placeOrderStepper",
      state: { blog },
    });
  };

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
            Blog content may be removed by the organization. Please try later.{" "}
            <br />
            Thank you for your patience.
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

          <AccordionGroup data={accordionData} />

          <div className="divider"></div>

          <div className="ratingReviews">
            <div className="ratingHeaders">
              <p>Ratings & Reviews</p>
              <IonButton fill="outline">Rate Product</IonButton>
            </div>
            <div className="ratingStats">
              <div className="overAllRatings">
                <p>Average</p>
                <div className="ratings">
                  <IonIcon style={{ color: "#008000" }} icon={star}></IonIcon>
                  <IonIcon style={{ color: "#008000" }} icon={star}></IonIcon>
                  <IonIcon style={{ color: "#008000" }} icon={star}></IonIcon>
                  <IonIcon style={{ color: "#008000" }} icon={star}></IonIcon>
                  <IonIcon
                    style={{ color: "#008000" }}
                    icon={starHalf}
                  ></IonIcon>
                </div>

                <p>4 ratings and 2 reviews</p>
              </div>
              <div className="verticalDivider"></div>
              <div className="ratingStats">
                <ul>
                  {[
                    { rating: 5, count: 1 },
                    { rating: 4, count: 2 },
                    { rating: 3, count: 0 },
                    { rating: 2, count: 0 },
                    { rating: 1, count: 1 },
                  ].map((item) => (
                    <li key={item.rating} className="ratingItem">
                      {item.rating} <IonIcon size="" icon={star}></IonIcon>
                      <div className="progressBar">
                        <div
                          className="progressFill"
                          style={{ inlineSize: `${(item.count / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ratingCount">{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="questions">
            <p>Questions and Answers</p>
            <p>Didn't get the rigth answer you are looking for</p>
          </div>
        </div>

        <div className="buttons">
          <button className="placeOrder" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <button className="addCart">Add to Cart</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ViewProduct;
