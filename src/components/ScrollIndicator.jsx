import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import scrollAnimation from "../assets/scrollAnimation.json";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      } w-12 h-25 mx-auto`}
    >
      <Player autoplay loop src={scrollAnimation} />
    </div>
  );
}

export default ScrollIndicator;
