import React, { useState } from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { SegmentCustomEvent } from "@ionic/core";
import GroceryItems from "../../pages/Segments/GroceryItems";
import AllItems from "../../pages/Segments/AllItems";

const Cart: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("default");

  const renderContent = () => {
    switch (selectedSegment) {
      case "default":
        return <GroceryItems />;
      case "segment":
        return <AllItems />;
      default:
        return null;
    }
  };

  const handleSegmentChange = (e: SegmentCustomEvent) => {
    const value = e.detail.value;
    if (typeof value === "string") {
      setSelectedSegment(value);
    }
  };

  return (
    <div>
      <IonSegment
        value={selectedSegment}
        mode="ios"
        onIonChange={handleSegmentChange}
      >
        <IonSegmentButton value="default">
          <IonLabel>Grocery</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>All Items</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {renderContent()}
    </div>
  );
};

export default Cart;
