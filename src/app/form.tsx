"use client";
import React, { useEffect } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
import { CascadingDropdowns } from "../components/ui/select-menu";
import { cn } from "../utils/cn";
import { IconBrandGithub } from "@tabler/icons-react";
import simpleScript from "./script";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  useEffect(() => {
    simpleScript();
  }, []);
  return (
    <div className="max-w-md w-[40%] h-auto rounded-md p-1 md:p-3 shadow-input bg-white dark:bg-black z-20 shadow-lg shadow-slate-300 hover:shadow-slate-400 lg:shadow-xl lg:shadow-slate-300">
      <h2 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">
        Welcome to Takaran Gizi
      </h2>
      <p className="text-neutral-600 text-[0.5rem] max-w-sm mt-1 dark:text-neutral-300">
        Login to Takaran Gizi if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="mt-2 mb-0" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">
          <LabelInputContainer>
            <Label htmlFor="age" className="text-[0.6rem] mt-[5px] mb-[9px]">
              Your Age
            </Label>
            <Input id="age" placeholder="Here Buddy" type="text" />
          </LabelInputContainer>
        </div>
        <CascadingDropdowns />

        {/* <button
          className="ini-submit bg-gradient-to-br text-[0.6rem] h-5 w-full relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 
          dark:bg-zinc-800  text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
          dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          id="submitButton"
        >
          Submit &rarr;
          <BottomGradient />
        </button> */}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-1 lg:my-4 h-[1px] w-full" />

        <div className="flex flex-col space-y-2">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <span className="group-hover/select:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>{children}</div>
  );
};
