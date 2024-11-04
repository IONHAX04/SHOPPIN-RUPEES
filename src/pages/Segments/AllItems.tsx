import React, { useState } from "react";
import {
  IonAlert,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
} from "@ionic/react";
import { add, heart, remove, trash } from "ionicons/icons";

import cartSample from "../../assets/cart/cartSample.svg";

const cartItemsData = [
  {
    id: 1,
    name: "Fruit Products",
    quantity: "1kg",
    price: 6,
    image: cartSample,
  },
  {
    id: 2,
    name: "Vegetable Products",
    quantity: "500g",
    price: 4,
    image: cartSample,
  },
  {
    id: 3,
    name: "Dairy Products",
    quantity: "2L",
    price: 8,
    image: cartSample,
  },
];

const AllItems: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: number]: number }>(
    cartItemsData.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );
  const [showAlert, setShowAlert] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);

  const incrementCount = (id: number) => {
    setCounts((prevCounts) => ({ ...prevCounts, [id]: prevCounts[id] + 1 }));
  };

  const decrementCount = (id: number) => {
    if (counts[id] === 1) {
      setItemToRemove(id);
      setShowAlert(true);
    } else {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [id]: prevCounts[id] - 1,
      }));
    }
  };

  const handleRemoveItem = () => {
    if (itemToRemove !== null) {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        delete newCounts[itemToRemove];
        return newCounts;
      });
      setItemToRemove(null);
    }
  };

  return (
    <div>
      <div className="addressHeader">
        <IonLabel>
          Deliver to : <strong>Sample Address</strong>
        </IonLabel>
        <p>Change</p>
      </div>
      <IonList>
        {cartItemsData.map((item) => (
          <IonItemSliding key={item.id}>
            <IonItemOptions side="start">
              <IonItemOption>
                <IonIcon slot="icon-only" icon={heart}></IonIcon>
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <div className="cartContents">
                <div className="cartStarting">
                  <img
                    src={item.image}
                    height={30}
                    width={30}
                    alt={item.name}
                  />
                  <div className="cartProduct">
                    <p>
                      {item.name}
                      <br />
                      <span>{item.quantity}</span>
                      <span>${item.price}</span>
                    </p>
                  </div>
                </div>
                <div className="cartEnding">
                  <IonIcon
                    icon={remove}
                    onClick={() => decrementCount(item.id)}
                  ></IonIcon>
                  <p>{counts[item.id]}</p>
                  <IonIcon
                    icon={add}
                    onClick={() => incrementCount(item.id)}
                  ></IonIcon>
                </div>
              </div>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption color="danger">
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>

      <IonAlert
        isOpen={showAlert}
        header="Alert!"
        mode="ios"
        message="Are you sure you want to remove the item from the cart?"
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              setShowAlert(false);
              setItemToRemove(null);
            },
          },
          {
            text: "OK",
            role: "confirm",
            handler: handleRemoveItem,
          },
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
    </div>
  );
};

export default AllItems;
