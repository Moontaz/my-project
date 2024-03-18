"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../utils/cn";
import { SignupFormDemo } from "./form";

export function BackgroundBoxesDemo() {
  return (
    <div className="gradient-container relative h-full lg:h-full w-full overflow-hidden flex flex-col items-center justify-center top-0 left-0 bg-[linear-gradient(320deg,rgba(100,100,100,1),rgba(0,0,0,1))] shadow-[inset_0_10px_5px_-5px_rgba(250,245,255,1)] lg:shadow-[inset_0_25px_10px_-15px_rgba(250,245,255,1)]">
      <div className="absolute inset-0 w-full h-full bg-hakuji z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <SignupFormDemo />
      <Boxes />
    </div>
  );
}
