"use client";

import React from "react";
import { useScroll } from "@/utils/ScrollContext";
import AboutMe from "@/sections/about me";
import Contact from "@/sections/contact";
import Opening from "@/sections/opening";
import Projects from "@/sections/projects";
import Stacks from "@/sections/stacks";

export default function Home() {
  const { refs } = useScroll();

  return (
    <>
      <Opening ref={refs.openingRef} />
      <AboutMe ref={refs.aboutMeRef} />
      <Stacks ref={refs.stacksRef} />
      <Projects ref={refs.projectsRef} />
      {/* <Contact ref={refs.contactRef} /> */}
    </>
  );
}
