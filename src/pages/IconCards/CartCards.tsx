import React from "react";
import {
  IonCol,
  IonCard,
  IonImg,
  IonLabel,
  IonIcon,
  IonButton,
  IonToast,
} from "@ionic/react";
import "../Segments/Segments.css";
import { globe } from "ionicons/icons";

interface CartCardProps {
  image: string;
  productName: string;
  weight: string;
  price: string;
  index: number;
}

const CartCards: React.FC<CartCardProps> = ({
  image,
  productName,
  weight,
  price,
  index,
}) => {
  const toastId = `toast-${index}`;

  return (
    <IonCol className="cart-item">
      <IonCard className="cartCards">
        <IonImg src={image} alt={productName} className="cartImage" />
        <IonLabel className="productName mt-2">{productName}</IonLabel>

        <IonButton className="addCart" id={`open-toast-${index}`}>
          <IonLabel>Add Cart</IonLabel>
        </IonButton>

        <IonToast
          mode="ios"
          trigger={`open-toast-${index}`}
          message={`${productName} added to cart!`}
          duration={3000}
          icon={globe}
        ></IonToast>
      </IonCard>
    </IonCol>
  );
};

export default CartCards;
