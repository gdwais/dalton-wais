"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../components/nav";

const navigation = [
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Writings", href: "https://medium.com/@daltonwais" },
	{ name: "Contact", href: "/contact" },
];

export default function About() {
	return (
		<div className="flex flex-col min-h-screen p-8 md:p-24">
			<Navigation currentPage="about" />

			<main className="max-w-4xl">
				<div className="flex flex-col md:flex-row items-start gap-8 mb-12">
					<Image
						className="rounded-lg shadow-lg w-48 h-48 object-cover"
						alt="Dalton Wais"
						src="/personal_avatar.jpg"
						width={200}
						height={200}
					/>
					<div>
						<h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
						<p className="text-zinc-100 text-lg">
							I'm a software engineer and technical leader with 10+ years
							building B2B SaaS products. My focus is on automation and AI
							integration—helping teams turn manual processes into systems that
							scale.
						</p>
					</div>
				</div>

				<section className="space-y-8">
					<div className="bg-black/30 rounded-lg p-6">
						<h2 className="text-2xl font-bold text-white mb-4">Current Work</h2>
						<p className="text-zinc-100">
							I'm a co-founder and engineer at{" "}
							<a
								href="https://usewinslow.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:underline"
							>
								Winslow
							</a>
							, an AI-native HR platform (Payroll, Benefits, HRIS, and
							automation) built for AI-first companies. Winslow is 100%
							conversational, extensible via plain-English workflows, and
							integrates where teams already work.
						</p>
					</div>

					<div className="bg-black/30 rounded-lg p-6">
						<h2 className="text-2xl font-bold text-white mb-4">
							Technical Background
						</h2>
						<div className="text-zinc-100">
							<p className="mb-4">
								Full-stack development across the modern web stack, with recent
								focus on workflow automation and AI:
							</p>
							<ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
								<li>TypeScript / Node.js</li>
								<li>React / Next.js</li>
								<li>Python</li>
								<li>Automation (n8n, Make, Zapier)</li>
								<li>Google Workspace (Sheets/Docs/Apps Script)</li>
								<li>Slack Integrations</li>
								<li>RAG / Vector DBs</li>
								<li>PostgreSQL / Redis</li>
								<li>Docker / CI/CD</li>
							</ul>
						</div>
					</div>

					<div className="bg-black/30 rounded-lg p-6">
						<h2 className="text-2xl font-bold text-white mb-4">
							Leadership Experience
						</h2>
						<p className="text-zinc-100">
							I've led engineering teams at early-stage startups and consulted
							for companies scaling their technical operations. My approach
							centers on clear architecture decisions, strong documentation, and
							building systems that teams can maintain long-term.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
}
