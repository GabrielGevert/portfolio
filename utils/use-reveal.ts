"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealOptions {
  stagger?: number;
  y?: number;
  start?: string;
}

export function useReveal(
  scope: RefObject<HTMLElement | null>,
  options?: RevealOptions
) {
  const { stagger = 0.12, y = 30, start = "top 82%" } = options ?? {};

  useGSAP(
    () => {
      const el = scope.current;
      if (!el) return;

      const targets = Array.from(el.children);
      if (!targets.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      });
    },
    { scope }
  );
}
