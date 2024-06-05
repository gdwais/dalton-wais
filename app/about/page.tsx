"use client";

import Image from "next/image";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function About() {
  return (
    <div className="container mx-auto flex mt-24 items-center justify-center px-4 text-white">
      <Navigation currentPage="about" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full">
            <Navigation currentPage="about" />

            <ul className="flex flex-col overflow-hidden">
              <Image
                className="rounded-lg shadow-lg "
                alt=""
                src="/personal_avatar.jpg"
                width={200}
                height={200}
              />
            </ul>
          </div>
        </aside>
        <main
          role="main"
          className="flex flex-col w-full sm:w-2/3 md:w-3/4 pt-1 px-2"
        >
          <div className="bg-black rounded-md bg-opacity-40 p-2 my-4">
            <span className="text-lg">
              Hi! I'm Dalton - I write code and build things. I love what I do
              want to do more of it.
            </span>
          </div>
          {/* <div className="bg-black rounded-md bg-opacity-40 p-2 my-4">
            Second Section
          </div> */}
          {``}
        </main>
      </div>
    </div>
  );
}
