import React from 'react'
import './Card.css'
// import photo from '../../assets/katie-zaferes.png'
import star from '../../assets/star.png'

const Card = (props) => {
  return (
    <section className='cardWrapper'>
      <div className='photo'>
        <div className="soldOutOverlay">
          <h4>SOLD OUT</h4>
        </div>
        <img src={props.img} alt="A photo of Katie Zaferes smiling" />
      </div>
      <div className='cardContent'>
        <div className='rating'>
            <img src={star} alt="A red ratings star" />
            <p>{props.rating}</p>
            <p>({props.reviewCount})</p>
            <p>{props.country}</p>
        </div>
        <p id='para1'>{props.title}</p>
        <p id='para2'>From {props.price} / <span>person</span></p>
      </div>
    </section>
  )
}

export default Card
