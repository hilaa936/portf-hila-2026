"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Business } from "@/components/Business";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function HomeView() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Business />
        <Skills />
        <Projects />
        <Process />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
