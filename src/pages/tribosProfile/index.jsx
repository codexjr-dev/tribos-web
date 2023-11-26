import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo-pequeno.svg";
import { ProfileInfo } from "./components/profileInfo";
import { TriboInfo } from "./components/triboInfo";
import { InfoProfile } from "./components/infoProfile";

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  flexDirection: "column",
};

const tribosTittle = {
  fontWeight: "bold",
  flexDirection: "row",
};

const triboPostContainer = {
  flexDirection: "column",
  display: "grid",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  position: "relative",
  top: "90px",
};

const infoProfileContainer = {
  flexDirection: "column",
  display: "grid",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(3, 1fr)",
};

export const TribosProfile = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <spam> codexjr </spam>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <div>
          <TriboInfo
            title="Codex jr."
            username="codexjr"
            descricao="descricao da tribo"
            seguirTribo={"seguir"}
          />
        </div>
        <div style={infoProfileContainer}>
          <InfoProfile numero={8} descricao="Publicações" />
          <InfoProfile numero={24} descricao="Membros" />
          <InfoProfile numero={2} descricao="Apoiadores" />
        </div>
        <div style={triboPostContainer}>
          <ProfileInfo url="" />
          <ProfileInfo url="" />
          <ProfileInfo url="" />
        </div>
      </div>
    </body>
  );
};
