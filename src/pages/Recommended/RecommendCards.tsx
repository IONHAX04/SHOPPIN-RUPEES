import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface CardComponentProps {
  imageSrc: string;
  title: string;
  content: string;
}

const RecommendCards: React.FC<CardComponentProps> = ({
  imageSrc,
  title,
  content,
}) => {
  return (
    <IonCard className="ionCards">
      <img
        alt={title}
        src={imageSrc}
        style={{ blockSize: "110px", inlineSize: "100%", objectFit: "cover" }}
      />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
};

export default RecommendCards;
