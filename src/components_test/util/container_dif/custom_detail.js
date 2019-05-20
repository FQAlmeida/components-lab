import React from "react";
import "./custom_detail.css";
import { IconContext } from "react-icons";

class CustomDetail extends React.Component {
  render() {
    return (
      <IconContext.Provider value={{ size: "40px" }}>
        <div className="Detail">
          <div className="Title">
            {this.props.icon}
            <h3 className="TitleText">{this.props.title}</h3>
          </div>
          <div className="DetailContent">{this.props.children}</div>
        </div>
      </IconContext.Provider>
    );
  }
}

export default CustomDetail;
