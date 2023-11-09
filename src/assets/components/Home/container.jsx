import React from "react";
import RotatingText from "../rotatingText";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  initialImg: {
    blur: 0,
  },
  animateImg: {
    blur: 2,
    transition: {
      delay: 5,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
  animateTitleOne: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
  animatedY: {
    opacity: 1,
    transition: {
      delay: 5,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
  AnimateTitleTwo: {
    opacity: 1,
    transition: {
      delay: 6,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
  AnimateRotating: {
    opacity: 1,
    transition: {
      delay: 7,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
};

function Container() {
  return (
    <>
      <section className="w-full h-screen font-sans">
        <div className="w-full h-screen justify-center bg-wine items-center">
          <motion.img
            variants={fadeInAnimationVariants}
            initial="initialImg"
            whileInView="animateImg"
            viewport={{
              once: true,
            }}
            className="absolute w-full object-cover h-screen brightness-[0.4] lg:brightness-[0.3] blur lg:blur-sm"
            src="home.jpeg"
            alt=""
          />
          <div className="w-full h-full flex flex-col justify-center items-center">
            <motion.h1
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animateTitleOne"
              viewport={{
                once: true,
              }}
              className="text-8xl font-bold text-white transform rotate-90 -translate-x-12 translate-y-12 text-"
            >
              PAULETTE
            </motion.h1>
            <motion.h1
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animatedY"
              viewport={{
                once: true,
              }}
              className="text-2xl font-bold text-white transform text-center"
            >
              &
            </motion.h1>
            <motion.h2
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="AnimateTitleTwo"
              viewport={{
                once: true,
              }}
              className="text-8xl font-bold text-white transform -rotate-90 translate-x-12 -translate-y-16"
            >
              ANGEL
            </motion.h2>
          </div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="AnimateRotating"
            viewport={{
              once: true,
            }}
          >
            <RotatingText classNames={"absolute transform -translate-y-40"} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Container;
