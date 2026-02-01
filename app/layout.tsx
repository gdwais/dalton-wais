import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { AppContextProvider } from "./context/app.context";

export const metadata: Metadata = {
	title: {
		default: "Dalton Wais",
		template: "%s | daltonwais.com",
	},
	description: "Software Developer, Consultant and Technologist",
	openGraph: {
		title: "Dalton Wais",
		description: "Builder, Software Developer & Fractional CTO",
		url: "https://daltonwais.com",
		siteName: "daltonwais.com",
		images: [
			{
				url: "https://daltonwais.com/favicon.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Dalton Wais",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

const firaFont = LocalFont({
	src: "../public/fonts/FiraCode-Regular.ttf",
	variable: "--font-fira",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={[inter.variable, calSans.variable, firaFont.variable].join(
				" ",
			)}
		>
			<head>{/* <Analytics /> */}</head>
			<body
				className={`${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}
