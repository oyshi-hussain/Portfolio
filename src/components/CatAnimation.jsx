import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import catAnimation from "../assets/cat.json";

function CatAnimation() {
  return (
    <div className="w-120 mb-10 -ml-20">
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
