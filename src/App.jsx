import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import data from './data'

function App() {

  const cards = data.map((item) => 
  <Card 
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
  />)

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

export default App
