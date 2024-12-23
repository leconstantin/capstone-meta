import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-4 lg:px-10 text-black relative">
      <div className="flex-1 mb-8 md:mb-0 md:w-1/2">
        <h1 className="font-bold text-3xl md:text-5xl">About Little Lemon</h1>
        <h2 className="font-medium text-lg">Chicago</h2>
        <p className="text-base md:text-lg mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>

      <div className="flex-1 flex justify-center md:justify-end ">
        <div className="w-full max-w-xs md:w-80 h-80">
          <img
            src="/images/foodh.jpg"
            alt="Mario and Adrian"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
