import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className="footer-container">
      <img className="img-github" src="/img/bxl-github.svg" alt="github" />
      <img
        className="img-linkedin"
        src="/img/bxl-linkedin-square.svg"
        alt="linkedin"
      />
      <img className="img-twitter" src="/img/bxl-twitter.svg" alt="twitter" />
    </div>
  );
}
