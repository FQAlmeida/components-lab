import React from "react";
import "./custom_container.css";
import { IconContext } from "react-icons";

class CustomContainer extends React.Component {
  render() {
    return (
      <div className="MainDiv" style={this.props.style}>
        <h1 className="Title">{this.props.title}</h1>
        <hr className="LineSep" />
        <IconContext.Provider value={{ size: "40px" }}>
          <div className="Childrens">{this.props.children}</div>
        </IconContext.Provider>
      </div>
    );
  }
}

export default CustomContainer;
