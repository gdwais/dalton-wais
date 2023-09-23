import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Writings", href: "https://medium.com/@daltonwais" },
  { name: "Contact", href: "/contact" },
];

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-tl from-[#002451] via-zinc-600/20 to-[#002451]">
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
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <span className="text-[80px]">{"{"}</span>
        services
        <span className="text-[80px]">{"}"}</span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-white/0" />
      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-300 flex flex-grow">Fractional CTO</h2>
        <br />
        <h2 className="text-lg text-zinc-300 flex flex-grow">Whatever</h2>
        <br />
        <h2 className="text-lg text-zinc-300 flex flex-grow">Blah Blah Blah</h2>
      </div>
      <div></div>
    </div>
  );
}
