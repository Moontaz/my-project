"use client";
import React, { useEffect } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Select } from "../components/ui/select";
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
    <div className="max-w-sm h-[97vh] lg:h-[36rem] w-[90vw] lg:w-auto mx-auto my-10 rounded-md sm:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-20 shadow-lg shadow-slate-300 hover:shadow-slate-400 lg:shadow-xl lg:shadow-slate-300">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Takaran Gizi
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Takaran Gizi if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="mt-4 mb-0" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="age">Your Age</Label>
            <Input id="age" placeholder="Here Buddy" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="yearmonth">Year / Month</Label>
            <select
              className="form-control mt-2"
              id="tahunOrBulan"
              name="tahunOrBulan"
              required
            >
              <option value="tahun">Tahun</option>
              <option value="bulan">Bulan</option>
            </select>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="gender">Gender</Label>
          <select
            className="form-control mt-2"
            id="gender"
            name="gender"
            required
          >
            <option value="">Pilih Gender</option>
            <option value="laki-laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <div className="form-group" id="hamilOrMenyusui"></div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-2">
          <div className="form-group" id="umurHamilOrMenyusui"></div>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-gray-600 dark:from-zinc-900 dark:to-zinc-900 to-gray-800 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          id="submitButton"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
