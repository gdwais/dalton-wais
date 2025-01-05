import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import ParticleControls from "./components/ParticleControls";
import { Navigation } from "./components/nav";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gradient-to-tl from-[#002451] to-[#002451]">
      <Particles className="absolute inset-0 -z-1" />
      <Navigation currentPage="home" />

      <div className="flex flex-row p-8 md:p-24 gap-8">
        <aside className="flex-shrink-0">
          <ParticleControls />
        </aside>

        <main className="flex-grow max-w-3xl">
          <h1 className="text-zinc-400 text-sm mb-6">Hi, my name is</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Dalton Wais.
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-400 mb-8">
            I solve problems using technology.
          </h3>

          <div className="text-zinc-400 text-lg max-w-xl mb-12">
            I'm a software developer and technology leader specializing in B2B
            SaaS solutions, with deep expertise in HR and benefits systems.
            Currently, I'm co-founding{" "}
            <span className="text-white">Winslow</span>, an AI-enabled HR
            efficiency platform, while also serving as a{" "}
            <span className="text-white">technology consultant</span> and{" "}
            <span className="text-white">full-stack developer</span>.
          </div>
        </main>
      </div>
    </div>
  );
}
