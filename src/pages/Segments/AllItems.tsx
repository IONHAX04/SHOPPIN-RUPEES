import { IonButton, IonLabel } from "@ionic/react";
import React from "react";

const AllItems: React.FC = () => {
  return (
    <div>
      <div className="addressHeader">
        <IonLabel>
          Deliver to : <strong>Sample Address</strong>
        </IonLabel>
        <p>Change</p>
      </div>
      <p>Your Cart Is Empty... Continue Shopping..</p>
    </div>
  );
};

export default AllItems;
