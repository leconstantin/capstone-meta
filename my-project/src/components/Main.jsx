import React from "react";

const Main = () => {
  return (
    <main className="bg-[#495E57] text-white min-h-screen">
      <section className="flex justify-center items-center p-10">
        <div className="flex-1 flex flex-col  space-y-5">
          <h1 className="text-[#F4CE14] text-5xl">Little Lemon</h1>
          <p>Sydney</p>
          <p className="text-lg max-w-lg">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-[#f4ce14] max-w-32 px-2 py-2 rounded-lg text-black font-semibold">
            Reserve a table
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/images/fooda.jpg"
            alt="my cover image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
