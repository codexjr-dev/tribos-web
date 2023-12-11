import { useNavigate } from "react-router-dom";

export const TriboInfo = ({ triboId, photoUrl, title, username }) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const fotoRedonda = {
    width: "62px",
    height: "62px",
    borderRadius: "100%",
  };

  console.log(photoUrl, title, username);

  const navigate = useNavigate();
  console.log(triboId);

  return (
    <div style={triboInfoContainer}>
      <img style={fotoRedonda} src={photoUrl} alt="Imagem da tribo" />
      <span
        style={{ fontWeight: "bold" }}
        onClick={() => navigate(`/tribos/profile/${triboId}`)}
      >
        {title}
      </span>
      <span style={{ fontWeight: "bold" }}>{username}</span>
      <button onClick={() => navigate(`/tribos/profile/${triboId}`)}>
        ver perfil
      </button>
    </div>
  );
};
