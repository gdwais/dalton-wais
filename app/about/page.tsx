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
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        <span className="text-[120px]">{"{"}</span>
        about
        <span className="text-[120px]">{"}"}</span>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-white/0" />
      <div className="my-12 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-300 flex flex-grow">
          Hello! I am a 10 year veteran of software development with experience
          in a variety of industry standard and open source technologies -
          emphasizing open mindedness and continuous growth. I love what I do
          and enjoy meeting complex problems with elegant and forward thinking
          solutions.
        </h2>
        <br />
        <h2 className="text-lg text-zinc-300 flex flex-grow">
          I am naturally gifted in leadership and team management including
          direction settings, mentoring, making technology or architecture
          decisions and long term project vision. I take ownership of the
          projects that I lead and intend to be an active participant in the
          success of a project. This means considering the entire holistic
          picture of an application and how it meets the intended purpose.
        </h2>
        <br />
        <h2 className="text-lg text-zinc-300 flex flex-grow">
          I have worked with a wide variety of technologies in my career and
          have always tried to focus more on concepts than specific syntax or
          language barriers. This allows me to easily pick up new tools and
          languages with ease. I have used extensively and am comfortable with
          the following technologies: Javascript | Typescript | ReactJS |
          Angular | NodeJS | C#/.NET | Ruby on Rails Microsoft SQL | MySQL |
          Postgres | MongoDb | Redis Docker | AWS | Heroku | Vercel
        </h2>
      </div>
      <div></div>
    </div>
  );
}
