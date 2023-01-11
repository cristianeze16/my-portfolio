import React from "react";
import "../styles/Portfolio.css";
import Card from "./Card";
export default function Portfolio() {
  return (
    <>
  
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-container">
        <Card
          src="/img/motorX.jpg"
          description={
            "Es un proyecto de E-commerce, donde se puede comprar autos de alta gama, indumentaria y accesorios"
          }
          title={"Motor X"}
        />
        <Card
          src="/img/mightyDucks.jpg"
          description={"Proyecto para una escuela de Hockey sobre hielo"}
          title={"Mighty Ducks"}
        />
        <Card
          src="/img/myTinerary.jpg"
          description={
            "Es un proyecto de viajes, donde había hoteles cada uno con sus Shows e itinerarios. Donde los usuarios podían registrarse, comentar y agregar sus reacciones"
          }
          title={"MyTinerary"}
        />
      </div>
    </>
  );
}