import React from 'react'
import './Card.css'
import star from '../../assets/star.png'

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={props.coverImg} className='card-image' />
      <div className='card-stats'>
          <img src={star} alt="A red ratings star" className='card-star'/>
          <span>{props.stats.rating}</span>
          <span className='gray'>({props.stats.reviewCount}) • </span>
          <span className='gray'>{props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p className='card-price'><span className='bold'>From {props.price}</span> / person</p>
    </div>
  )
}

export default Card
