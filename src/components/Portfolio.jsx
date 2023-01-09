import React from 'react'
import "../styles/Portfolio.css"
import Card from "./Card"
export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">Portfolio</div>
      <Card src="/img/motorX.jpg" description={"proyecto uno"} />
    </>
  );
}
