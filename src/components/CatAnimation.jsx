import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import catAnimation from "../assets/cat.json";

function CatAnimation() {
  return (
    <div className="absolute left-6 w-100 mb-10">
      <Player
        autoplay
        loop
        src={catAnimation}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}

export default CatAnimation;
