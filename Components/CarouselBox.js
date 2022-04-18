import React, { Component } from 'react'
import { CarouselItem } from 'react-bootstrap'
import forestImg from '../assets/forest.jpg'
import dforestImg from '../assets/dforest.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselBox extends Component {
    render (){ 
        return(
      <Carousel>
          <Carousel.Item>
              <img 
                className="d-block w-100"
                src={forestImg} 
                alt="Forest"
              />
              <Carousel.Caption>
                  <h3>Clothing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img 
                className="d-block w-100"
                src={dforestImg} 
                alt="Forest"
              />
              <Carousel.Caption>
                  <h3>Interior designer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img 
                className="d-block w-100"
                src={forestImg} 
                alt="Forest"
              />
              <Carousel.Caption>
                  <h3>Interior designer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </Carousel.Caption>
          </Carousel.Item>
          
      </Carousel>
        )
    }
}