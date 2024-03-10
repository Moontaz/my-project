"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <div>
        <p className="text-4xl lg:text-8xl text-slate-700 font-bold inter-var text-center">
          Time to start
          <button className="bg-orange-400 bg-opacity-25 text-slate-800 rounded-lg lg:rounded-xl ml-1 px-1 pb-2 mt-1 lg:ml-4 lg:px-3 lg:pb-6 lg:pt-3 lg:mt-3 ">
            healthy life
          </button>
        </p>
        <p className="text-xl md:text-3xl mt-4 text-balck font-normal inter-var text-center ">
          Take action to the better life
        </p>
      </div>
    </WavyBackground>
  );
}
