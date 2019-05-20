import React from "react";
import './serviceLayout.css'

class ServiceLayout extends React.Component {
  render() {
    return (
      <div className="ServiceLayout" style={this.props.style}>
        <h1 className="Title">{this.props.title}</h1>
        <hr className="LineSep" />

        <div className="ServiceLayoutChildren">{this.props.children}</div>
      </div>
    );
  }
}

export default ServiceLayout;
