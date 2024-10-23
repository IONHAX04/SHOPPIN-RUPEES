import React from "react";

import emptyBasket from "../../assets/cart/empty.svg";

import "./Segments.css";
import { IonIcon } from "@ionic/react";
import { chevronForwardSharp } from "ionicons/icons";

const GroceryItems: React.FC = () => {
  return (
    <div>
      <div className="emptyBasket">
        <img src={emptyBasket} height={200} width={200} />
        <h5>Your Cart is Empty !!!</h5>
        <p>Get 50 % Discount on your first shopping</p>
      </div>
      <div className="allOffers">
        <div className="offerHeader">
          <p>View All Offers</p>
          <IonIcon icon={chevronForwardSharp}></IonIcon>
        </div>
        <div className="products">
          <div className="banner">
            <h5>Grocery At</h5>
            <h3>Wholesale Pack</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryItems;
