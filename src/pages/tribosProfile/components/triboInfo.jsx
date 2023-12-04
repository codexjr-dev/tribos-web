export const TriboInfo = ({ photoUrl, title, username }) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "62px",
    height: "62px",
  };

  return (
    <div>
      <img src={photoUrl} alt="Imagem da tribo" style={imageStyle} />
      <span style={{ fontWeight: "bold", padding: "24px" }}>{username}</span>
      <p style={{ fontWeight: "bold" }}>{title}</p>
    </div>
  );
};
