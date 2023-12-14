import { useNavigate } from "react-router-dom";

export const TriboInfo = ({ triboId, photoUrl, username }) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "auto",
    padding: "5px",
  };

  const fotoRedonda = {
    width: "40px",
    height: "40px",
    borderRadius: "100%",
  };

  console.log(photoUrl, username);

  const navigate = useNavigate();
  console.log(triboId);

  return (
    <div style={triboInfoContainer}>
      <img style={fotoRedonda} src={photoUrl} alt="Imagem da tribo" />
      <span
        style={{ fontWeight: "bold", paddingRight: "5px" }}
        onClick={() => navigate(`/tribos/profile/${triboId}`)}
      >
        {username}
      </span>
      <button onClick={() => navigate(`/tribos/profile/${triboId}`)}>
        ver perfil
      </button>
    </div>
  );
};
