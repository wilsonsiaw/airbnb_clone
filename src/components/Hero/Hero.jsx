import React from 'react'
import './Hero.css'
import grid from '../../assets/photo-grid.png'

const Hero = () => {
  return (
    <section>
      <div className='photoGrid'>
        <img src={grid} alt="a photo grid of people" />
      </div>
      <div className='mainContent'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero
