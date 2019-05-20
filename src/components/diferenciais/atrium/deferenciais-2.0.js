import React from "react";
import CustomContainer from "../../util/atrium/container_dif/custom_container/custom_container";
import CustomDetail from "../../util/atrium/container_dif/custom_detail/custom_detail";
import { FaPaperPlane, FaUserGraduate } from "react-icons/fa";
import { MdMoneyOff, MdEventAvailable } from "react-icons/md";
import { IoIosPodium } from "react-icons/io";

/*
  UDESC: FaUserGraduate, IoMdRibbon
  Preço: MdMoneyOff
  Metodologia: IoIosPodium, TiThList
  Disponibilidade: MdEventAvailable, 
  Empreendedor: FaPaperPlane
*/

class Diferenciais extends React.Component {
  render() {
    return (
      <>
        <CustomContainer
          title="Nossos Diferenciais"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <CustomDetail
            title="Selo UDESC de Qualidade"
            icon={<FaUserGraduate />}
          >
            <p>
              O nossa time é composto pelos alunos mais empenhados e proativos
              da UDESC, uma das melhores universidades do estado de Santa
              Catarina.
            </p>
          </CustomDetail>
          <CustomDetail title="Preço Competitivo" icon={<MdMoneyOff />}>
            <p>
              A nossa tabela de preços sempre se mantém atualizada com as
              tendencias do mercado. Assim, nós garantimos que você nunca vai
              pagar à mais pelo serviço. :)
            </p>
          </CustomDetail>
          <CustomDetail title="Metodologias Modernas" icon={<IoIosPodium />}>
            <p>
              O nosso processo de desenvolvimento de processos segue os mais
              modernos modelos desenvolvidos, como por exemplo, o{" "}
              <strong>SCRUM</strong>, à qual seguimos como filosofia.
            </p>
          </CustomDetail>
          <CustomDetail
            title="Disponibilidade para o Cliente"
            icon={<MdEventAvailable />}
          >
            <p>
              Os nossos responsáveis pelos projetos estarão disponiveis a hora
              que você precisar, assim qual problema em qualquer momento,
              estaremos disponiveis para você.
            </p>
          </CustomDetail>
          <CustomDetail title="Espírito Empreendedor" icon={<FaPaperPlane />}>
            <p>
              Nós não temos medo de fazer o novo, de fazer o que ningém mais
              faz, por isso o seu problema é a nossa paixão.
            </p>
          </CustomDetail>
        </CustomContainer>
      </>
    );
  }
}

export default Diferenciais;
