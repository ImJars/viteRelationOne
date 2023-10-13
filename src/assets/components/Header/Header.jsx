import React from "react";
import { TbLetterP, TbLetterJ } from "react-icons/tb";

function Header() {
  return (
    <>
      <div className="fixed w-full h-14 bg-white">
        <div className="flex h-full justify-between items-center mx-10">
          <div>
            <div>
              <ul className="flex space-x-6 items-center">
                <div className="flex space-x-10">
                    <div className="flex items-center">
                        <TbLetterP className="text-4xl"/>
                        <TbLetterJ className="text-4xl"/>
                    </div>
                  <li className="flex items-center font-semibold">Paulette&Angel</li>
                </div>
                <li className="font-semibold">Historia</li>
                <li className="font-semibold">Proximamente</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex space-x-6">
              <h1>X</h1>
              <h1>Main Menu</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
