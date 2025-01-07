"use client";

import AboutMe from "@/sections/about me";
import Contact from "@/sections/contact";
import Opening from "@/sections/opening";
import Projects from "@/sections/projects";
import Stacks from "@/sections/stacks";

// import Faq from "@/sections/Home-Page/FaqSection";
// import JobsList from "@/sections/Home-Page/JobsSection";
// import Newsletter from "@/sections/Home-Page/Newsletter";
// import Testimonials from "@/sections/Home-Page/Testimonials";
// import WhyUs from "@/sections/Home-Page/WhyUsSection";
// import { Banner } from "@components";

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
