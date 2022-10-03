import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo-g.png";
import DADOS from "../data";

export default function Inicio({ iniciar, validado, validaDackSelecionado }) {
  const [visivel, setVisivel] = useState(true);

  return (
    <Container visivel={visivel}>
      <Logo src={logo} />
      <Titulo>ZapRecall</Titulo>
      <ComboDack
        defaultValue="0"
        name="dack"
        onChange={(e) => validaDackSelecionado(e.target.value)}
      >
        <option value="0" disabled>
          Escolha seu dack
        </option>
        {DADOS.map((dado) => {
          return (
            <option value={dado.id} key={dado.id}>
              {dado.descricao}
            </option>
          );
        })}
      </ComboDack>
      <Botao
        onClick={() => {
          iniciar(true);
          setVisivel(false);
        }}
        disabled={validado}
      >
        Iniciar Recall!
      </Botao>
    </Container>
  );
}

const Container = styled.main`
  display: ${(props) => (props.visivel ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`;

const Logo = styled.img`
  width: 131px;
  height: 161px;
`;

const Titulo = styled.h1`
  font-family: "Righteous", cursive;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: white;
`;

const Botao = styled.button`
  width: 246px;
  height: 54px;
  color: #d70900;
  font-family: "Recursive", sans-serif;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
`;

const ComboDack = styled.select`
  width: 246px;
  height: 54px;
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  color: gray;
  border: 1px solid gray;
  vertical-align: middle;
  -webkit-appearance: none;
  appearance: none;
  padding-left: 5px;
  outline: none;
`;
