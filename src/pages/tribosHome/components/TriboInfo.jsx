import { useNavigate } from "react-router-dom";

export const TriboInfo = ({ photoUrl, title, username, privateTribo }) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  return (
    <div style={triboInfoContainer}>
      <img src={photoUrl} alt="Imagem da tribo" />
      <span
        style={{ fontWeight: "bold" }}
        onClick={() => navigate("/tribos/profile")}
      >
        {title}
      </span>
      <span style={{ fontWeight: "bold" }}>{username}</span>
      <button onClick={() => navigate("/tribos/profile")}>ver perfil</button>
    </div>
  );
};
