import { useState } from "react";
import styled from "styled-components";
import setinha from "../assets/img/setinha.png";

export default function FlashCard({
  escolhido,
  setEscolhido,
  selecionarCard,
  questao,
  concluir,
  cardAtual,
}) {
  const [virada, setVirada] = useState(false);
  const [respondendo, setRespondendo] = useState(false);

  return (
    <li>
      <Card respondendo={respondendo} finalizada={questao.resultado}>
        <p>Pergunta {questao.id}</p>
        {questao.resultado !== "nr" ? (
          questao.resultado === "zap" ? (
            IconZap
          ) : questao.resultado === "qnl" ? (
            IconDuvida
          ) : questao.resultado === "nl" ? (
            IconErro
          ) : (
            console.log("Qualéeeeeeeeeeeeeee")
          )
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => {
              if (!escolhido) {
                setRespondendo(true);
                setEscolhido(true);
                selecionarCard(questao.id);
              }
            }}
          >
            <path
              d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
          </svg>
        )}
      </Card>
      <CardAberto respondendo={respondendo} finalizada={questao.resultado}>
        <Frente onClick={() => setVirada(true)} virada={virada}>
          <p>{questao.pergunta}</p>
          <img src={setinha} alt="seta para ver a resposta" />
        </Frente>
        <Verso virada={virada}>
          <p>{questao.resposta}</p>
          <ContainerBotoes>
            <Botao cor="#FF3030" onClick={() => concluir(cardAtual, "nl")}>
              Não
              <br /> lembrei
            </Botao>
            <Botao cor="#FF922E" onClick={() => concluir(cardAtual, "qnl")}>
              Quase Não
              <br /> lembrei
            </Botao>
            <Botao cor="#2FBE34" onClick={() => concluir(cardAtual, "zap")}>
              Zap!
            </Botao>
          </ContainerBotoes>
        </Verso>
      </CardAberto>
    </li>
  );
}

const IconErro = (
  <svg viewBox="0 0 512 512" fill="red">
    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
  </svg>
);

const IconZap = (
  <svg viewBox="0 0 512 512" fill="green">
    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
  </svg>
);

const IconDuvida = (
  <svg viewBox="0 0 512 512" fill="orange">
    <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm-6 304a20 20 0 1120-20 20 20 0 01-20 20zm33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 01-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 11-28-1.35c.11-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43z" />
  </svg>
);

const Card = styled.div`
  width: 300px;
  height: 65px;
  display: ${(props) =>
    props.respondendo ? (props.finalizada !== "nr" ? "flex" : "none") : "flex"};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 12px;
  padding: 15px;
  font-family: "Recursive", cursive;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${({ finalizada }) =>
      finalizada !== "nr"
        ? finalizada === "zap"
          ? "green"
          : finalizada === "qnl"
          ? "orange"
          : finalizada === "nl"
          ? "red"
          : ""
        : "black"};
    text-decoration: ${(props) =>
      props.finalizada !== "nr" ? "line-through" : ""};
  }

  svg {
    cursor: pointer;
    width: 30px;
  }
`;

const CardAberto = styled.div`
  width: 300px;
  min-height: 130px;
  background-color: #ffffd4;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Recursive", cursive;
  position: relative;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin: 12px;
  padding: 15px;
  display: ${(props) =>
    props.respondendo
      ? props.finalizada !== "nr"
        ? "none"
        : "block"
      : "none"};
`;

const Frente = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  padding: 20px 10px;
  top: 0px;
  left: 0px;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.virada ? "rotateY(-180deg)" : "")};

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Verso = styled(Frente)`
  transform: ${(props) => (props.virada ? "rotateY(0deg)" : "rotateY(180deg)")};
  display: flex;
  flex-direction: column;

  p {
    word-wrap: break-word;
    flex-wrap: wrap;
    text-overflow: ellipsis;
  }
`;

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Botao = styled.button`
  width: 90px;
  height: 40px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.cor};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;
