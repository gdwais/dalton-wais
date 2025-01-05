"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Writings", href: "https://medium.com/@daltonwais" },
  { name: "Contact", href: "/contact" },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-[#002451] to-[#002451] p-8 md:p-24">
      <Particles className="absolute inset-0 -z-10" />
      <Navigation currentPage="services" />

      <main className="max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Services
        </h1>
        <p className="text-zinc-400 text-lg mb-12">
          I offer comprehensive technology solutions to help businesses thrive
          in the digital age. Let's collaborate to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              💻 Technology Consulting
            </h3>
            <p className="text-zinc-400">
              Strategic technology planning, architecture design, and digital
              transformation guidance to help your business leverage the right
              tools and processes.
            </p>
          </div>

          <div className="bg-black/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              🔧 Website Design
            </h3>
            <p className="text-zinc-400">
              Modern, responsive web applications built with the latest
              technologies. Focus on user experience, performance, and
              maintainability.
            </p>
          </div>

          <div className="bg-black/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              👨🏽‍💻 Fractional CTO
            </h3>
            <p className="text-zinc-400">
              Part-time technical leadership to help guide your technology
              strategy, team development, and technical decision-making.
            </p>
          </div>

          <div className="bg-black/40 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">
              🚀 Contractor Oversight
            </h3>
            <p className="text-zinc-400">
              Technical project management and quality assurance for your
              contractor teams. Ensure deliverables meet expectations and align
              with business goals.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
