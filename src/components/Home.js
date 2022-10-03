import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo-home.png";
import FlashCard from "./FlashCard";
import Footer from "./Footer";

export default function Home({ visivel, DADOS}) {
  const [escolhido, setEscolhido] = useState(false);
  const [respondidos, setRespondidos] = useState([]);
  const [cardAtual, setCardAtual] = useState(0);
  console.log(DADOS)

  function concluir(idx, resultado) {
    if (respondidos.includes(idx)) return;

    setEscolhido(false);
    setRespondidos([...respondidos, idx]);

    const a = DADOS.find((x) => x.id === idx);
    a.resultado = resultado;
  }

  function selecionarCard(idx) {
    setCardAtual(idx);
  }

  return (
    <Container visivel={visivel}>
      <Header>
        <Logo src={logo} />
      </Header>
      <ContainerCard>
        {DADOS.map((dado) => {
          return (
            <FlashCard
              selecionarCard={selecionarCard}
              escolhido={escolhido}
              setEscolhido={setEscolhido}
              questao={dado}
              key={dado.id}
              concluir={concluir}
              cardAtual={cardAtual}
            />
          );
        })}
      </ContainerCard>
      <Footer
        quantidadeCards={DADOS.length}
        proguesso={respondidos.length}
        respondidos={respondidos}
        respostas={DADOS}
      />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 111px;
  height: 100vh;
  display: ${(props) => (props.visivel ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Header = styled.header`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 36px;
  color: white;
  font-family: "Righteous";
  z-index: 1;
  background-color: #fb6b6b;
`;

const Logo = styled.img`
  max-width: 255px;
  max-height: 60px;
`;

const ContainerCard = styled.ul`
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
