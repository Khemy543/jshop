import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Slideview extends Component {
  render(){
    return(
      <div>
        <Carousel>
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/netflix.png")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>NETFLIX</h3>
      <p>Get your NETFLIX account from jessy naggy works</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/Image.jpg")}
      alt="First slide"
      style={{ height:"520px"}}
     
      
    />
    <Carousel.Caption>
      <h3>FLYERS DESIGN</h3>
      <p>Come and let's give you a perfect design</p>
    </Carousel.Caption>
    </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/to.jpeg")}
      alt="Third slide"
      style={{ height:"520px"}}
    />

    <Carousel.Caption>
      <h3>LAPTOP ACCESSORIES</h3>
      <p>We sell laptops and other laptops accessories</p>
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>
        </div>
    );
  }
}


export default Slideview;