import React from "react";
import { BackgroundBoxesDemo } from "./bg-boxes";
import { MacbookScrollDemo } from "./macbook";

function App() {
  return (
    <main>
      <div className="grid grid-cols-1">
        <MacbookScrollDemo />
        {/* <BackgroundBoxesDemo /> */}
      </div>
    </main>
  );
}

export default App;
