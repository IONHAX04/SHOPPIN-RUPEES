import React from "react";
import emptyBasket from "../../assets/cart/empty.svg";
import chocolates from "../../assets/cart/chocolates.svg";
import detergent from "../../assets/cart/detergent.svg";
import "./Segments.css";
import { IonIcon } from "@ionic/react";
import { chevronForwardSharp } from "ionicons/icons";
import CartCards from "../IconCards/CartCards";

const GroceryItems: React.FC = () => {
  const products = [
    {
      index: 1,
      image: chocolates,
      productName: "Chocolates - Dark Fantasy",
      weight: "300g",
      price: "150 CHF",
    },
    {
      index: 2,
      image: detergent,
      productName: "Detergent - Liquid Soap",
      weight: "500g",
      price: "80 CHF",
    },
    {
      index: 3,
      image: chocolates,
      productName: "Chocolates - Dark Fantasy",
      weight: "300g",
      price: "150 CHF",
    },
    {
      index: 4,
      image: detergent,
      productName: "Detergent - Liquid Soap",
      weight: "500g",
      price: "80 CHF",
    },
    {
      index: 5,
      image: chocolates,
      productName: "Chocolates - Dark Fantasy",
      weight: "300g",
      price: "150 CHF",
    },
    {
      index: 6,
      image: detergent,
      productName: "Detergent - Liquid Soap",
      weight: "500g",
      price: "80 CHF",
    },
    // Add more products if needed
  ];

  return (
    <div>
      <div className="emptyBasket">
        <img src={emptyBasket} height={150} width={150} alt="Empty Cart" />
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

          <div className="cartCardHoriz">
            {products.map((product, index) => (
              <CartCards
                key={index}
                image={product.image}
                productName={product.productName}
                weight={product.weight}
                price={product.price}
                index={product.index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryItems;
