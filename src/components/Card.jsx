import React from "react";
import "../styles/Cards.css";

export default function Card({ src, description, title }) {
  return (
    <div className="card-container">
      <img className="image-cards" src={src} alt="" loading="lazy" />
      <h2 className="card-title">{title}</h2>
      <p className="desc-card">{description}</p>
    </div>
  );
}
