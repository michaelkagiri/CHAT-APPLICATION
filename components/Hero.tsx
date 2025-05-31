import React from "react";

const Hero = () => {
  return (
    <section className={"text-center py-20 px-6 "}>
      <h2 className={"text-4xl md:text-6xl font-extrabold mb-6"}>Drive Your Dream Car</h2>
      <p className={"text-lg md:text-xl mb-8"}>
        Discover, compare and rent top cars with ease from CarHub.
      </p>
      <a
        href="#get-started"
        className={"bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"}
      >
        Explore Now
      </a>
    </section>
  );
};

export default Hero;
