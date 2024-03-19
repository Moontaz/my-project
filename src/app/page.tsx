import React from "react";
import { MacbookScrollDemo } from "./macbook";
import { BackgroundBoxesDemo } from "./bg-boxes";

function App() {
  return (
    <main>
      <div className="grid grid-cols-1">
        {/* <BackgroundBoxesDemo /> */}
        <MacbookScrollDemo />
        {/* <BackgroundBeamsDemo /> */}
      </div>
    </main>
  );
}

export default App;
