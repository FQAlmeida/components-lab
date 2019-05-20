import React from "react";
import "./custom_container.css";

class CustomContainer extends React.Component {
  //render_childrens(childrens) {
  //  let offset = 0;
  //  let qtd = 3;
  //  let retorno = [];
  //  while (offset < childrens.length) {
  //    retorno.push(
  //      <ContainerSep key={offset / qtd}>
  //        {childrens.slice(offset, offset + qtd)}
  //      </ContainerSep>
  //    );
  //    if (offset + 3 > childrens.length) {
  //      qtd = childrens.length - offset;
  //    }
  //    offset += qtd;
  //  }
  //  return retorno;
  //}
  render() {
    return (
      <div className="MainDiv" style={this.props.style}>
        <h1 className="Title">{this.props.title}</h1>
        <hr className="LineSep" />

        <div className="Childrens">{this.props.children}</div>
      </div>
    );
  }
}

export default CustomContainer;
