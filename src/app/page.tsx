"use client";

import AboutMe from "@/sections/about me";
import Contact from "@/sections/contact";
import Opening from "@/sections/opening";
import Projects from "@/sections/projects";
import Stacks from "@/sections/stacks";

export default function Home() {
  return (
    <>
      <Opening />
      <AboutMe />
      <Stacks />
      <Projects />
      <Contact />
    </>
  );
}
