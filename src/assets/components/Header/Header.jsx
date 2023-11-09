import { React, useState } from "react";
import { TbLetterP, TbLetterJ } from "react-icons/tb";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animateHeader: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.5,
      transition: "easeInOut",
    },
  },
};

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="fixed w-full h-14 bg-transparent z-50">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animateHeader"
          viewport={{
            once: true,
          }}
          className="flex h-full justify-between items-center mx-5 my-2"
        >
          <div>
            <div>
              <ul className="flex space-x-6 items-center">
                <div className="flex space-x-5">
                  <div className="flex items-center text-white opacity-20">
                    <TbLetterP className="text-4xl" />
                    <h1>&</h1>
                    <TbLetterJ className="text-4xl" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <button className="flex space-x-6">
              {showMenu ? (
                <AiOutlineClose
                  className="text-white text-4xl"
                  onClick={toggleMenu}
                />
              ) : (
                <HiOutlineMenuAlt1
                  className="text-white text-4xl"
                  onClick={toggleMenu}
                />
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
