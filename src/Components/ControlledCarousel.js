import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../Assets/Images/slider1.jpg';
import slider2 from '../Assets/Images/slider2.jpg';
import slider3 from '../Assets/Images/slider3.jpg';
import slider4 from '../Assets/Images/slider4.jpg';
import slider5board from '../Assets/Images/slider5board.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Set your workspace</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Eat healthy foods</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Decorate your home</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Manage your space</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider5board}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Remember to find time with your friends</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }
  
  export default ControlledCarousel;