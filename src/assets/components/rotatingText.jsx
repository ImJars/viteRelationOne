import React from "react";
import ReactRotatingText from "react-rotating-text";

function RotatingText({ classNames }) {
  return (
    <>
      <div className={`${classNames} text-white font-thin flex w-full justify-center text-lg`}>
        <ReactRotatingText items={[
          "Nuestra Historia de Amor 📖❤️", 
          "5 Años Juntos 💕👫", 
          "El Amor de mi Vida 💖",
          "El mejor equipo del mundo 👫❤",
          "Siempre Juntos en las buenas y en las malas 👫❤️",
          ]} 
        />
      </div>
    </>
  );
}

export default RotatingText;
