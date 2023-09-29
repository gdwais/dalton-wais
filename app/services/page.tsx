"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function Services() {
  return (
    <div className="  from-zinc-900/0  to-zinc-900/0">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <Navigation currentPage="services" />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="text-white grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          services!
        </div>
      </div>
    </div>
  );
}
