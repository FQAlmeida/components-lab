import React from "react";
import "./container_sep.css";

class ContainerSep extends React.Component {
  render() {
    return (
      <>
        <div className="Separator">{this.props.children}</div>
        <hr/>
      </>
    );
  }
}

export default ContainerSep;
