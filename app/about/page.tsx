"use client";

import { useState } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

const startDate = new Date("November 1, 2013");

export default function About() {
  const [now, setNow] = useState<Date>(new Date());

  const [years, setYears] = useState<string>(
    (now.getFullYear() - startDate.getFullYear()).toString(),
  );
  const [months, setMonths] = useState<string>("24");
  const [weeks, setWeeks] = useState<string>("24");
  const [days, setDays] = useState<string>("12");
  const [hours, setHours] = useState<string>("14");
  const [minutes, setMinutes] = useState<string>("61");
  const [seconds, setSeconds] = useState<string>("574");

  return (
    <div className="container mx-auto flex mt-24 items-center justify-center px-4 text-white">
      <Navigation currentPage="about" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
          <div className="sticky top-0 p-4 w-full">
            <Navigation currentPage="about" />

            <ul className="flex flex-col overflow-hidden">
              <img src="/personal_avatar.jpg" />
            </ul>
          </div>
        </aside>
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          <span className="text-4xl">about me</span>
          <br />
          {`I started writing code professionally on ${startDate.toString()}.`}
          <div>{years} years</div>
          <div>{months} months</div>
          <div>{weeks} weeks</div>
          <div>{days} days</div>
          <div>{hours} hous</div>
          <div>{minutes} minutes</div>
          <div>{seconds} seconds</div>
        </main>
      </div>
    </div>
  );
}
