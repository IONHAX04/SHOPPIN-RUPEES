import React from "react";
import { IonCol, IonCard, IonIcon, IonLabel } from "@ionic/react";

interface IconCardProps {
  icon: string;
  name: string;
}

const IconCards: React.FC<IconCardProps> = ({ icon, name }) => {
  return (
    <IonCol className="scroll-item">
      <IonCard className="icon-card">
        <IonIcon icon={icon} className="iconStyle" />
      </IonCard>
      <IonLabel className="icon-label">{name}</IonLabel>
    </IonCol>
  );
};

export default IconCards;
