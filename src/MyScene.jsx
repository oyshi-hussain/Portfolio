import React, { use, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

function MyScene() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  const fullText = "Hey there! Tashfia here. Welcome to my Portfolio!";
  const fullText2 =
    "A creative developer and designer passionate about blending art and technology — from sketching in Procreate to prototyping in Figma and building interactive apps. I'm a quick learner, always ready for new challenges. Explore my projects to get a glimpse of my journey.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        // Waits before switching to second text
        setTimeout(() => {
          setShowSecondText(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <Spline
          scene="https://prod.spline.design/k2MjCofHjksepTnR/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
        />

        {splineLoaded && (
          <div
            className="absolute top-[47%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 text-slate-900 opacity-70 
        font-serif font-semibold w-[320px] max-w-full text-center whitespace-pre-wrap break-words space-y-4"
          >
            {!showSecondText ? (
              <div className="text-lg typing-effect animate-fade-in">
                {text}
                {text !== fullText && (
                  <span className="animate-blink ml-1">|</span>
                )}
              </div>
            ) : (
              <div className="text-[13px] mt-5 animate-fade-smooth">
                {fullText2}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyScene;

// Welcome to my portfolio! I’m Tashfia — a creative developer and designer passionate about blending technology and design. From sketching in Procreate to prototyping in Figma and building interactive apps, I love turning ideas into engaging digital experiences. Explore my projects and get a glimpse into my journey!

/* <Spline scene="https://prod.spline.design/HMqCMMYuWQgvwRgm/scene.splinecode" /> */

/* Perfect One */

/* <Spline scene="https://prod.spline.design/k2MjCofHjksepTnR/scene.splinecode" /> */

/* Still in progress for the snow one */

/* <Spline scene="https://prod.spline.design/k2MjCofHjksepTnR/scene.splinecode" /> */
