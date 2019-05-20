import React from "react";
import ServiceLayout from "../../util/atrium/container_services/service_layout/serviceLayout";
import ServiceGerenciamento from "./servicesGerenciamento";
import ServiceRealidade from "./serviceVRConstrucao";
import ServiceConstrucao from "./serviceConstrucao";

class ServicosTableGerenciamento extends React.Component {
  render() {
    return (
      <ServiceLayout title="Nossos Serviços">
        <ServiceGerenciamento />
        <ServiceConstrucao />
        <ServiceRealidade />
      </ServiceLayout>
    );
  }
}

export default ServicosTableGerenciamento;
