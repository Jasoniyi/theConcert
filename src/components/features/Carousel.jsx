import React from "react";
import Slider from "react-slick";

import imageOne from "../../resources/images/r1.jpg";
import imageTwo from "../../resources/images/r2.jpg";
import imageThree from "../../resources/images/r3.jpg";
import imageFour from "../../resources/images/r4.jpg";
import imageFive from "../../resources/images/r5.jpg";
import imageSix from "../../resources/images/r6.jpg";
import imageSeven from "../../resources/images/r7.jpg";
import imageEight from "../../resources/images/r8.jpg";
import imageNine from "../../resources/images/r9.jpg";

const Carousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        overflow: "hidden",
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageNine})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageOne})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageTwo})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageThree})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageEight})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageFive})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageSix})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageSeven})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${imageFour})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
