import React from "react";
import { TypewriterEffectDemo } from "./typewritter";
import { BackgroundBeamsDemo } from "./bg-beams";
import { SpotlightPreview } from "./bg-spotlight";
import { WavyBackgroundDemo } from "./bg-wavy";
import { BackgroundBoxesDemo } from "./bg-boxes";
import { BackgroundGradientAnimationDemo } from "./bg-gradient";
import { LampDemo } from "./lamp";

function App() {
  return (
    <main>
      <div className="grid grid-cols-1">
        <BackgroundGradientAnimationDemo />
        <div className="bg-purple-100 h-screen w-screen"></div>
        <BackgroundBoxesDemo />
      </div>
    </main>
  );
}

export default App;
