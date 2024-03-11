"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-[95vw] overflow-hidden relative h-full rounded-2xl lg:rounded-3xl  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-violet-100 to-purple-50 shadow-2xl shadow-violet-300 ">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-[95vw] overflow-hidden relative h-full rounded-2xl lg:rounded-3xl  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-violet-100 to-purple-50 shadow-2xl shadow-violet-300">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-[95vw] overflow-hidden relative h-full rounded-2xl lg:rounded-3xl  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-violet-100 to-purple-50 shadow-2xl shadow-violet-300">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-[95vw] overflow-hidden relative h-full rounded-2xl lg:rounded-3xl  p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-violet-100 to-purple-50 shadow-2xl shadow-violet-300">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-[95vw] overflow-hidden relative h-full rounded-2xl lg:rounded-3xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-violet-100 to-purple-50 shadow-2xl shadow-violet-300">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-start my-10 ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
