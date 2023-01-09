import React from 'react'
import "../styles/Cards.css"
export default function Card({src,description}) {
  console.log(src)
  return (
    <div className='card-container'>
    <img className='image-cards' src= {src}  alt=""/>
    <p>{description}</p>
    <button>Leer más..</button>
    </div>
  )
}
