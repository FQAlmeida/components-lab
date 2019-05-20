import React from "react";
import "./card_hover.css";

class CardHover extends React.Component {
  render() {
    return <div className="CustomCard" style={this.props.style}>{this.props.children}</div>;
  }
}

export class CardHoverFront extends React.Component {
  render() {
    return <div className="Content">{this.props.children}</div>;
  }
}

export class CardHoverOverlay extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div className="ContentHover">{this.props.children}</div>
      </div>
    );
  }
}

export default CardHover;
