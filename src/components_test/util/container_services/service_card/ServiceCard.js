import React from "react";
import CardHover, {
  CardHoverFront,
  CardHoverOverlay
} from "../../card_hover/card_hover";
import DetailFront from "./detail_front/detail_front";

class Servicos extends React.Component {
  render() {
    return (
      <CardHover style={{height: "300px"}}>
        <CardHoverFront>
          <DetailFront icon={this.props.icon}>
            <h3>{this.props.title}</h3>
          </DetailFront>
        </CardHoverFront>
        <CardHoverOverlay><div>{this.props.overlayText}</div></CardHoverOverlay>
      </CardHover>
    );
  }
}

export default Servicos;
