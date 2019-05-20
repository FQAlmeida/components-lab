import React from "react";
import { IoIosPaper } from "react-icons/io";
import { FaSlidersH } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../../../components_test/util/container_services/service_card/ServiceCard";
import ServiceTable from "../../../components_test/util/container_services/service_table/serviceTableLayout";

class ServiceGerenciamento extends React.Component {
  render() {
    return (
      <ServiceTable title="Gerenciamento">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <ServiceCard
                title="Laudo Patológico"
                icon={<i class="fas fa-file-alt fa-5x" />}
                overlayText={
                  <>
                    <p>Este aqui é o texto sobre os laudos.</p>
                    <p>
                      Laudos são documentos muito legais, que nos permitem
                      laudear coisas.
                    </p>
                  </>
                }
              />
            </Col>
            <Col xs lg="4">
              <ServiceCard
                title="Layout de Planejamento"
                icon={<FaSlidersH />}
                overlayText={
                  <>
                    <p>Este aqui é o texto sobre layout de planejamento.</p>
                    <p>
                      Planejamento é uma parte muito importante do projeto, você
                      deveria dar importancia para ele >:(.
                    </p>
                  </>
                }
              />
            </Col>
          </Row>
        </Container>
      </ServiceTable>
    );
  }
}

export default ServiceGerenciamento;
