import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";


function CarouselMain() {
  return (
    <Carousel >
    <Carousel.Item  >
      <Image
        className="d-block w-100"
        src="/banner.jpg"
        alt="First slide"
        width="800" height="800"
      />
      <Carousel.Caption>
      <h1 className= "text-uppercase py-2 fw-bold text-white">BlockMarket</h1>
      <h2 className= "text-capitalize text-white">First Blockchain E-Commerce Site of Turkey </h2>
      <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Image  
        className="d-block w-100"
        src="/banner.jpg"
        alt="Second slide"
        width="800" height="800"
      />

      <Carousel.Caption>
      <h1 className= "text-uppercase py-2 fw-bold text-white">BlockMarket</h1>
      <h2 className= "text-capitalize text-white">Authenticity Guaranteed Products Protected <br></br> by Blockchain Infrastructure</h2>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  )
}

export default CarouselMain;