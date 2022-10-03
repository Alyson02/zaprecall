import { useState } from "react";
import DADOS from "../data";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import Inicio from "./Inicio";

export default function App() {
  const [entrou, setEntrou] = useState(false);
  let [perguntas, setPerguntas] = useState([]);
  const [validado, setValidado] = useState(true);

  function validaDackSelecionado(value) {
    if (value !== "0") {
      setValidado(false);
      const perguntasSelecionadas = DADOS.find((d) => d.id == value).perguntas;
      setPerguntas(perguntasSelecionadas);
      console.log(perguntasSelecionadas);
    }
  }

  function iniciar(condicao) {
    setEntrou(condicao);
  }

  return (
    <>
      <GlobalStyle />
      <Inicio
        validado={validado}
        validaDackSelecionado={validaDackSelecionado}
        iniciar={iniciar}
        perguntas={perguntas}
      />
      <Home visivel={entrou} DADOS={perguntas} />
    </>
  );
}
