import React from "react";

import Carousel from "./Carousel";
import Counter from "./Countdown";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />

      <div className="artist_name font_righteous">
        <div className="wrapper">Drake & friends</div>
      </div>

      <Counter />
    </div>
  );
};

export default Featured;
