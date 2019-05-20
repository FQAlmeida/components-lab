import React from "react";
import { IoIosFlash } from "react-icons/io";
import { FaFireExtinguisher } from "react-icons/fa";
import { GiGreekTemple, GiTeePipe,GiTowerBridge } from "react-icons/gi";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../../../components_test/util/container_services/service_card/ServiceCard";
import ServiceTable from "../../../components_test/util/container_services/service_table/serviceTableLayout";

class ServiceGerenciamento extends React.Component {
  render() {
    return (
      <ServiceTable title="Construção">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <ServiceCard
                title="Projeto Arquitetônico"
                icon={<GiGreekTemple />}
                overlayText={
                  <>
                    <p>Este aqui é o texto sobre os arquitetônicos.</p>
                    <p>
                      Arquitetônicos são documentos muito legais, que nos
                      permitem laudear coisas.
                    </p>
                  </>
                }
              />
            </Col>
            <Col xs lg="4">
              <ServiceCard
                title="Projeto Estrutural"
                icon={<GiTowerBridge />}
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
            <Col xs lg="4">
              <ServiceCard
                title="Projeto Hidráulico"
                icon={<GiTeePipe />}
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
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <ServiceCard
                title="Projeto Elétrico"
                icon={<IoIosFlash />}
                overlayText={
                  <>
                    <p>Este aqui é o texto sobre os arquitetônicos.</p>
                    <p>
                      Arquitetônicos são documentos muito legais, que nos
                      permitem laudear coisas.
                    </p>
                  </>
                }
              />
            </Col>
            <Col xs lg="4">
              <ServiceCard
                title="Projeto de Prevenção Contra Incêndio"
                icon={<FaFireExtinguisher />}
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
