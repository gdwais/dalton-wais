"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type NavigationProps = {
	currentPage: string;
};

export const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const links = [
		{
			name: "home",
			label: "Home",
			route: "/",
		},
		{
			name: "about",
			label: "About",
			route: "/about",
		},
		{
			name: "services",
			label: "Services",
			route: "/services",
		},
		{
			name: "writings",
			label: "Writings",
			route: "https://medium.com/@daltonwais",
		},
		{
			name: "contact",
			label: "Contact",
			route: "/contact",
		},
	];

	return (
		<header ref={ref}>
			<div className={"fixed inset-x-0 top-0 z-50 duration-200"}>
				<div className="container flex items-center justify-end p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{links
							.filter((l) => l.name !== currentPage)
							.map((l) => (
								<Link
									key={l.route}
									href={l.route}
									className="duration-200 text-zinc-100 hover:text-zinc-100"
								>
									{l.label}
								</Link>
							))}
					</div>
				</div>
			</div>
		</header>
	);
};
