import React from 'react'
import './Card.css'
import photo from '../../assets/katie-zaferes.png'
import star from '../../assets/star.png'

const Card = () => {
  return (
    <section className='cardWrapper'>
      <div className='photo'>
        <div className="soldOutOverlay">
          <h4>SOLD OUT</h4>
        </div>
        <img src={photo} alt="A photo of Katie Zaferes smiling" />
      </div>
      <div className='cardContent'>
        <div className='rating'>
            <img src={star} alt="A red ratings star" />
            <p>5.0</p>
            <p>(6)</p>
            <p>USA</p>
        </div>
        <p id='para1'>Life lessons with Katie Zaferes</p>
        <p id='para2'>From $136 / <span>person</span></p>
      </div>
    </section>
  )
}

export default Card
