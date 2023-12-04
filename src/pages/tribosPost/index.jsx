import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { PostInfo } from "./components/postInfo";

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "20vh",
  flexDirection: "column",
  fontWeight: "bold",
};

export const TribosPost = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={triboInfo2}>
        <header>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> Tribos </span>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
      </div>
      <div>
        <PostInfo />
      </div>
    </div>
  );
};
