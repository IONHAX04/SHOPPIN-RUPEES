import React from "react";
import Lottie from "lottie-react";
import splash from "../../assets/splash/splash.json";

const Splash: React.FC = () => {
  return (
    <div className="splashScreen">
      <Lottie animationData={splash} loop={true} />
      <p className="bottomText">Shop In Rupees</p>
    </div>
  );
};

export default Splash;
