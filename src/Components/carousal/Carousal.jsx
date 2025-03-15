import React from "react";
import { img } from "./data";
import classes from "./Carousal.module.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarousalEffect() {
  return (
    <div className={classes.carousal}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
    </div>
  );
}

export default CarousalEffect;
