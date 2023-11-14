import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel() {
  return (
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={2500} infiniteLoop={true}>
      <div>
        <img src="/1.png" alt="Slide 1" />
      </div>
      <div>
        <img src="/2.png" alt="Slide 2" />
      </div>
      <div>
        <img src="/3.png" alt="Slide 3" />
      </div>
    </Carousel>
  );
}

export default CustomCarousel;
