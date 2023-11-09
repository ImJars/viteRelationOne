import React from "react";
import RotatingText from "../rotatingText";

function Container() {
  return (
    <>
      <section className="w-full h-screen font-sans">
        <div className="w-full h-screen justify-center bg-wine items-center">
            <img className="absolute w-full object-cover h-screen brightness-[0.4] lg:brightness-[0.3] blur lg:blur-sm" src="home.jpeg" alt="" />
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold text-white transform rotate-90 -translate-x-12 translate-y-12 text-">
              PAULETTE
            </h1>
            <h1 className="text-2xl font-bold text-white transform text-center">
              &
            </h1>
            <h2 className="text-8xl font-bold text-white transform -rotate-90 translate-x-12 -translate-y-16">
              ANGEL
            </h2>
          </div>
          <RotatingText 
            classNames={"absolute transform -translate-y-40"}
        />
        </div>
      </section>
    </>
  );
}

export default Container;
