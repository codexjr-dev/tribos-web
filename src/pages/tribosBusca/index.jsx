import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { useState, useEffect } from "react";

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

export const TribosBusca = () => {
  const tribos = ["codexjr", "frutas"];
  const navigate = useNavigate();

  const [busca, setBusca] = useState("");

  const lowerBusca = busca.toLowerCase();
  const tribosFiltradas = tribos.filter((tribo) =>
    tribo.toLowerCase().includes(lowerBusca)
  );

  return (
    <body>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <spam> Buscar tribos </spam>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <div>
          <input
            type="text"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
          <ul onClick={() => navigate("/tribos/profile")}>
            {tribosFiltradas.map((tribo) => (
              <li key={tribo}>{tribo}</li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  );
};
