import React from "react";
import "./detail_front.css";
import { IconContext } from "react-icons";

class CustomDetail extends React.Component {
    
  render() {
    return (
      <IconContext.Provider value={{ size: "80px" }}>
        <div className="DetailFront">
          {this.props.icon}
          <div className="Title">
            <h3 className="TitleText">{this.props.children}</h3>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
}

export default CustomDetail;
