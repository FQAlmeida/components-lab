import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.png";
import img6 from "./images/6.jpg";
import CustomCarousel from "../util/carousel/carousel";

class Parceiros extends React.Component {
  render() {
    return (
      <CustomCarousel>
        <img src={img1} alt="Test" />
        <img src={img2} alt="Test" />
        <img src={img3} alt="Test" />
        <img src={img4} alt="Test" />
        <img src={img5} alt="Test" />
        <img src={img6} alt="Test" />
      </CustomCarousel>
    );
  }
}

export default Parceiros;
