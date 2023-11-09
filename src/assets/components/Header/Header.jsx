import {React, useState} from "react";
import { TbLetterP, TbLetterJ } from "react-icons/tb";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="fixed w-full h-14 bg-transparent z-50">
        <div className="flex h-full justify-between items-center mx-5 my-2">
          <div>
            <div>
              <ul className="flex space-x-6 items-center">
                <div className="flex space-x-5">
                    <div className="flex items-center text-white opacity-30">
                        <TbLetterP className="text-4xl"/>
                        <h1>&</h1>
                        <TbLetterJ className="text-4xl"/>
                    </div>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <button className="flex space-x-6">
              {showMenu ?
                <AiOutlineClose className="text-white text-4xl" onClick={toggleMenu}/>
                :
                <HiOutlineMenuAlt1 className="text-white text-4xl" onClick={toggleMenu}/>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
