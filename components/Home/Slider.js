import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'


const Slider = () => {
    return (
        <div  className="slider" style={{height:"100%"}}>
            
            <Carousel style={{height:"600px"}}>
  <Carousel.Item interval={800}>
  <Image src="/images/banner1.jpg" width="1800px" height="680px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={800}>
  <Image src="/images/desktop_slider.jpg"width="1800px" height="680px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item interval={800}>
   <Image src="/images/desktop_slider1.jpg"width="1800px" height="680px"/>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item> 
</Carousel>
        </div>
    )
}

export default Slider
