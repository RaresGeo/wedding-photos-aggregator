"use client";

import { useState, useEffect } from "react";

interface GlowProps {
  index: number;
  top: number;
  left: number;
}

const Glow: React.FC<GlowProps> = ({ index, top, left }) => {
  return (
    <div
      key={index}
      className="glow"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        background: `
            linear-gradient(
                ${Math.random() * 360}deg,
                rgba(
                    ${100 + Math.random() * 100},
                    ${100 + Math.random() * 100}, 
                    ${50 + Math.random() * 100}, 
                0.5) 21.9%,
                rgba(255, 151, 119, 0.5) 125.17%
            )`,
        animationDelay: `${Math.random() * 10 - 15}s`,
      }}
    />
  );
};

export default Glow;
