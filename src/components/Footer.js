import styled from "styled-components";

export default function Footer({
  quantidadeCards,
  proguesso,
  respondidos,
  respostas,
}) {
  return (
    <FooterConcluidos>
      <p>
        {proguesso}/{quantidadeCards} CONCLUÍDOS
      </p>
      <ul>
        {respondidos.map((respondido) => {
          const resposta = respostas.find(({ id }) => id === respondido);
          if (resposta != null)
            return (
              <li>
                {resposta.resultado === "zap"
                  ? IconZap
                  : resposta.resultado === "qnl"
                  ? IconDuvida
                  : resposta.resultado === "nl" && IconErro}
              </li>
            );
        })}
      </ul>
    </FooterConcluidos>
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

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 126px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  ul {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    svg {
      width: 30px;
    }
  }
`;
