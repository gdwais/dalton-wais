"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Writings", href: "https://medium.com/@daltonwais" },
  { name: "Contact", href: "/contact" },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen p-8 md:p-24">
      <Navigation currentPage="services" />

      <main className="max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Services
        </h1>
        <p className="text-zinc-100 text-lg mb-12 max-w-2xl">
          I help teams ship AI features faster and automate the workflows that
          slow them down. Here's how we can work together.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-black/40 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              AI Integration & Automation
            </h3>
            <p className="text-zinc-100 mb-4">
              Turn AI pilots into production systems. I build LLM-powered
              features, RAG pipelines, and workflow automation using tools like
              OpenAI, LangChain, and vector databases.
            </p>
            <div className="text-zinc-100 text-sm">
              <span className="text-zinc-100 font-medium">Deliverables:</span>{" "}
              Working prototype, architecture documentation, deployment guide,
              and handoff to your team.
            </div>
          </div>

          <div className="bg-black/40 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Fractional CTO
            </h3>
            <p className="text-zinc-100 mb-4">
              Part-time technical leadership for early-stage companies. I help
              with architecture decisions, hiring your first engineers, vendor
              selection, and building your technical roadmap.
            </p>
            <div className="text-zinc-100 text-sm">
              <span className="text-zinc-100 font-medium">Engagement:</span>{" "}
              Typically 10-20 hours/month. Weekly syncs, async Slack access,
              code reviews, and architecture guidance.
            </div>
          </div>

          <div className="bg-black/40 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Full-Stack Development
            </h3>
            <p className="text-zinc-100 mb-4">
              End-to-end product development in React, Node.js, and TypeScript.
              I've shipped B2B SaaS products in HR, benefits, and enterprise
              software.
            </p>
            <div className="text-zinc-100 text-sm">
              <span className="text-zinc-100 font-medium">Deliverables:</span>{" "}
              Production-ready code, CI/CD pipeline, test coverage, and
              documentation.
            </div>
          </div>

          <div className="bg-black/40 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Technical Due Diligence
            </h3>
            <p className="text-zinc-100 mb-4">
              Independent assessment of codebases, architecture, and engineering
              teams for investors or acquirers. I identify technical debt,
              security risks, and scalability concerns.
            </p>
            <div className="text-zinc-100 text-sm">
              <span className="text-zinc-100 font-medium">Deliverables:</span>{" "}
              Written report with findings, risk assessment, and
              recommendations.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
