import React, { useRef, useEffect } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

interface AccordionData {
  value: string;
  header: string;
  content: { label: string; value: string }[];
}

interface AccordionGroupProps {
  data: AccordionData[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ data }) => {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }
    accordionGroup.current.value = ["first", "third"];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
      {data.map((accordion, index) => (
        <IonAccordion value={accordion.value} key={accordion.value}>
          <IonItem slot="header" color="light">
            <IonLabel>{accordion.header}</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <IonGrid>
              {accordion.content.map((row, rowIndex) => (
                <IonRow
                  key={row.label}
                  style={{
                    backgroundColor: rowIndex % 2 === 0 ? "#f0f0f0" : "#fff",
                  }}
                >
                  <IonCol>{row.label}</IonCol>
                  <IonCol>{row.value}</IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </div>
        </IonAccordion>
      ))}
    </IonAccordionGroup>
  );
};

export default AccordionGroup;
