import Link from "next/link";
import React from "react";
import { Navigation } from "./components/nav";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navigation currentPage="home" />

      <div className="flex flex-col p-8 md:p-24">
        <main className="max-w-3xl">
          <h1 className="text-zinc-100 text-sm mb-6">Hi, my name is</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Dalton Wais.
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-8">
            I build AI-powered automation that works.
          </h3>

          <div className="text-zinc-100 text-lg max-w-xl mb-12">
            <p className="mb-4">
              I help companies ship AI features and automate workflows—from
              proof-of-concept to production. Currently building{" "}
              <a
                href="https://usewinslow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Winslow
              </a>
              , an AI-native HR platform (Payroll, Benefits, HRIS, and
              automation) built for AI-first companies—100% conversational,
              extensible workflows, and integrated where teams work.
            </p>
            <p>
              10+ years of full-stack development. Deep expertise in LLMs,
              RAG pipelines, and enterprise integrations.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
