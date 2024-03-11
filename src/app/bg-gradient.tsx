import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl shadow-[inset_0px_-10px_5px_-5px_rgba(250,245,255,1)] lg:shadow-[inset_0px_-20px_10px_-10px_rgba(250,245,255,1)]">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Healthy <span className=""> With </span> Happy
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
