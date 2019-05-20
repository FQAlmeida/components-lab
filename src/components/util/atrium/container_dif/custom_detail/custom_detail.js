import React from "react";
import "./custom_detail.css";

class CustomDetail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <div className="Title">
          {this.props.icon}
          <h3 className="TitleText">
            {this.props.title}
          </h3>
        </div>
        <div className="DetailContent">{this.props.children}</div>
      </div>
    );
  }
}

export default CustomDetail;
