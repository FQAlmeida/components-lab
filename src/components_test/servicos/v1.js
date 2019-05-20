import React from "react";
import CardHover, {
  CardHoverFront,
  CardHoverOverlay
} from "../util/card_hover/card_hover";
import ServiceCard from "../util/container_services/service_card/ServiceCard";
import { IoIosPaper } from "react-icons/io";

class ServicosGerenciamento extends React.Component {
  render() {
    return (
      <ServiceCard
        icon={<IoIosPaper />}
        title={"Laudo"}
        overlayText={
          <>
            <p>Este aqui é o texto sobre os laudos.</p>
            <p>
              Laudos são documentos muito legais, que nos permitem laudear
              coisas.
            </p>
          </>
        }
      />
    );
  }
}

export default ServicosGerenciamento;
