import React from "react";
import splash from "../../assets/cart/introGif.gif";

const Splash: React.FC = () => {
  return (
    <div className="splashScreen">
      <img src={splash} alt="Splash Screen" className="splashImage" />
    </div>
  );
};

export default Splash;
