import React, { useState } from 'react'
import './App.css'
import Nav_bar from "./components/Nav_bar"
import  Carousel  from "./components/Carousel"
import {slides} from "./data/carouselData.json"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav_bar/>
      <Carousel data={slides}/>
    </>
  )
}

export default App
