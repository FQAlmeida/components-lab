import React from "react";
import './serviceTableLayout.css'


class ServiceLayout extends React.Component {
  render() {
    return (
      <div className="ServiceTableLayout" style={this.props.style}>
        <h3 className="Title">{this.props.title}</h3>
        <hr className="LineSep" style={{width: "5%"}}/>

        <div className="ServiceChildren">{this.props.children}</div>
        <hr className="LineSep" style={{width: "5%"}}/>
      </div>
    );
  }
}

export default ServiceLayout;
