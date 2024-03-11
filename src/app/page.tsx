import React from "react";
import { BackgroundBoxesDemo } from "./bg-boxes";
import { BackgroundGradientAnimationDemo } from "./bg-gradient";
import { TabsDemo } from "./tabs-app";

function App() {
  return (
    <main>
      <div className="grid grid-cols-1">
        <BackgroundGradientAnimationDemo />
        <div className="bg-purple-50 h-screen w-screen ">
          <TabsDemo />
        </div>
        <BackgroundBoxesDemo />
      </div>
    </main>
  );
}

export default App;
