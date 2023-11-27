import { TriboInfo } from "./components/TriboInfo";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo-pequeno.svg";
import { useState, useEffect } from "react";

const triboInfoContainer = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  display: "grid",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
};

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  flexDirection: "column",
};

const tribosTittle = {
  fontWeight: "bold",
  height: "10vh",
  flexDirection: "row",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  top: "50px",
};

export const TribosHome = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/dashboard")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <spam> Tribos </spam>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <main>
          <div style={triboInfoContainer}>
            <TriboInfo title="Codex Jr" username="codexjr" />
            <TriboInfo title="Codex Jr" username="codexjr" />
            <TriboInfo title="Codex Jr" username="codexjr" />
            <TriboInfo title="Codex Jr" username="codexjr" />
          </div>
        </main>
        <div style={buttonStyle}>
          <button onClick={() => navigate("/tribos/busca")}>Buscar</button>
        </div>
      </div>
    </body>
  );
};
