import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import React from "react";
import "./carousel.css";

class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesPerPage: props.slidesPerPage | 3,
      animationSpeed: props.animationSpeed | 2000,
      autoPlay: props.autoPlay | 3000
    };
    this.renderChildrens = this.renderChildrens.bind(this);
  }

  renderChildrens = childrens => {
    return childrens.map(child => {
      return <div className="CarouselItem">{child}</div>;
    });
  };

  render() {
    return (
      <Carousel
        slidesPerPage={this.state.slidesPerPage}
        slidesPerScroll={1}
        animationSpeed={this.state.animationSpeed}
        autoPlay={this.state.autoPlay}
        offset={0}
        infinite
        centered
      >
        {this.renderChildrens(this.props.children)}
      </Carousel>
    );
  }
}

export default CustomCarousel;
