import React from "react";
import { BackgroundBoxesDemo } from "./bg-boxes";
import { BackgroundGradientAnimationDemo } from "./bg-gradient";

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
