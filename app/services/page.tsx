"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function Services() {
  return (
    <div className="  from-zinc-900/0  to-zinc-900/0">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      <Navigation currentPage="services" />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto text-white">
        <div className="flex bg-black rounded-md bg-opacity-40 p-2 my-4 w-[1000px] h-[500px]">
          <span className="text-lg mx-auto">
            I can do just about anything - feel free to reach out so we can
            chat! 👋
          </span>
        </div>
        <br />
        <div className="flex w-full flex-row">
          <div className="flex w-1/4 mx-4 bg-black rounded-md bg-opacity-40 p-2 my-4">
            <span className="mx-auto">💻 Technology Consulting</span>
          </div>
          <div className="flex w-1/4 mx-4 bg-black rounded-md bg-opacity-40 p-2 my-4">
            <span className="mx-auto">🔧 Website Design</span>
          </div>
          <div className="flex w-1/4 mx-4 bg-black rounded-md bg-opacity-40 p-2 my-4">
            <span className="mx-auto">👨🏽‍💻 Fractional CTO</span>
          </div>
          <div className="flex w-1/4 mx-4 bg-black rounded-md bg-opacity-40 p-2 my-4">
            <span className="mx-auto">🚀 Contractor Oversight</span>
          </div>
        </div>
      </div>
    </div>
  );
}
