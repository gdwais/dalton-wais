import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import ParticleTooltip from "./components/ParticleTooltip";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Writings", href: "https://medium.com/@daltonwais" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-tl from-[#002451]  to-[#002451] -z-2">
      <Particles className="absolute inset-0 -z-1 animate-fade-in" />
      <nav className="my-12 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-300 hover:text-white mx-8"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0  to-zinc-300/0" />

      <h1 className=" text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Dalton Wais
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 to-white/0" />
      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-300 flex flex-grow">
          <div className="mx-12">
            {/* <a href="/services/fcto">Fractional CTO</a> */}
            Freelance Software Developer
          </div>{" "}
          <div>💻</div> <div className="mx-12"> Technology Consultant </div>
          <div> 🚀 </div>
          <div className="mx-12">SQL Database Admin</div>
        </h2>
        <ParticleTooltip />
      </div>
    </div>
  );
}
