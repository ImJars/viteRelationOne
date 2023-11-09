import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="Img1.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="Img2.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="Img3.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="Img4.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="Img5.jpeg" onDragStart={handleDragStart} role="presentation" />,
  <img src="Img6.jpeg" onDragStart={handleDragStart} role="presentation" />,
];

function SectionOne() {
  return (
    <>
      <section className="w-full h-full font-sans">
        <div className="mx-2">
          <div>
            <h1 className="mt-20 text-2xl font-bold">
              Hola Mi Amor <span className="text-red-500">♥</span>
            </h1>
            <div className="w-7 h-1 rounded-full bg-wine" />
            <p className="mt-4">
              ¡5 años juntos, amor! ¿Puedes creerlo? El tiempo pasa tan rápido,
              he disfrutado cada momento junto a ti al máximo. ¡Nuestra relación
              está llena de aventuras y de muchas otras cosas jaja! Y a pesar de
              que hemos pasado momentos difíciles, llenos de muchos dramas por
              alguien jaja. ¡Pero aun asi lo hemos superado juntos! ¿Como es
              posible que mi amor por ti aun siga como el primer día? Pues sé
              que puedo contar contigo en los malos momentos porque tienes los
              mejores consejos, y que a pesar de mis errores me amas y me
              quieres como soy. Lo único que puedo desear es que estemos juntos
              por muchos años más. ¡Te Amoooooo muchisimo, jamas lo olvides!
            </p>
          </div>
        </div>
        <div className="mx-2 mt-10">
          <AliceCarousel mouseTracking items={items} />
        </div>
      </section>
    </>
  );
}

export default SectionOne;
