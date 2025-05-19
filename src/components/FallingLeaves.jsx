import React from "react";
import "./FallingLeaves.css";
import leaves from "../assets/images/leaves.png";

const FallingLeaves = () => {
  const numLeaves = 10;

  return (
    <div className="leaf-container">
      {/* Left side */}
      <div className="leaf-column">
        {[...Array(numLeaves)].map((_, i) => (
          <img
            key={`left-${i}`}
            src={leaves}
            alt="leaf"
            className={`leaf leaf-left leaf-${i % 10}`}
          />
        ))}
      </div>

      {/* Right side */}
      <div className="leaf-column">
        {[...Array(numLeaves)].map((_, i) => (
          <img
            key={`right-${i}`}
            src={leaves}
            alt="leaf"
            className={`leaf leaf-right leaf-${i % 10}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FallingLeaves;
