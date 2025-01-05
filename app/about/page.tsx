"use client";

import Link from "next/link";
import Image from "next/image";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Writings", href: "https://medium.com/@daltonwais" },
  { name: "Contact", href: "/contact" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-[#002451] to-[#002451] p-8 md:p-24">
      <Particles className="absolute inset-0 -z-1" />
      <Navigation currentPage="about" />

      <main className="max-w-4xl">
        <div className="flex items-start gap-8 mb-12">
          <Image
            className="rounded-lg shadow-lg w-48 h-48 object-cover"
            alt="Dalton Wais"
            src="/personal_avatar.jpg"
            width={200}
            height={200}
          />
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-zinc-400 text-lg mb-6">
              With over a decade of experience in software development, I've
              built a career focused on solving complex problems with elegant
              solutions. I specialize in B2B SaaS solutions, with particular
              expertise in HR and benefits systems.
            </p>
          </div>
        </div>

        <section className="space-y-8">
          <div className="bg-black/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Technical Leadership
            </h2>
            <p className="text-zinc-400">
              I excel in leadership and team management, bringing strong
              direction-setting, mentoring, and architectural decision-making
              skills. I take ownership of projects and actively participate in
              ensuring their success.
            </p>
          </div>

          <div className="bg-black/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Technical Expertise
            </h2>
            <div className="text-zinc-400">
              <p className="mb-4">Core technologies I work with include:</p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <li>Javascript/Typescript</li>
                <li>React/React Native</li>
                <li>NodeJS</li>
                <li>C#/.NET</li>
                <li>SQL/NoSQL Databases</li>
                <li>AWS/Docker</li>
                <li>LangChain</li>
                <li>OpenAI</li>
                <li>RAG/ChromaDB</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Current Role</h2>
            <p className="text-zinc-400">
              As a Founding Engineer at Winslow, I'm working on cutting-edge
              AI-enabled HR efficiency solutions. My responsibilities include
              architecting software applications, managing engineering teams,
              and developing proof-of-concept applications using technologies
              like WebRTC, LangChain, and OpenAI.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
