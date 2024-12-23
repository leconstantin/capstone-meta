import React from "react";
import Hero from "../sections/landing/Hero";
import Specials from "../sections/landing/specials";
import Testimonials from "../sections/landing/Testimonials";
import About from "../sections/landing/About";

const LandingPage = () => {
  return (
    <main className=" text-white min-h-screen">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default LandingPage;
