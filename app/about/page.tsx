"use client";

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
              <img src="/personal_avatar.jpg" />
            </ul>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          <span className="text-4xl"></span>
          Hi! I'm Dalton - I write code and build things. I love what I do want
          to do more of it.
          <br />
          {``}
        </main>
      </div>
    </div>
  );
}
