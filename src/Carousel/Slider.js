
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../assets/images/template1.png';
import image2 from './../assets/images/template2.jpg';
import image3 from './../assets/images/template3.png';

const CarouselContainer = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel controls={false} fade={true} pause={false} interval={2000} indicators={false}>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image1}
              alt="First slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image2}
              alt="Second slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image3}
              alt="Third slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image2}
              alt="Second slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image3}
              alt="Third slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image1}
              alt="First slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={image3}
              alt="Third slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image1}
              alt="First slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
            <img
              src={image2}
              alt="Second slide"
              style={{ height: "400px", width: "400px", objectFit: "contain" }}
            />
          </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselContainer;
