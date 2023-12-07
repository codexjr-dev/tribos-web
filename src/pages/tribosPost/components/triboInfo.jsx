export const TriboInfo = ({ photoUrl, username }) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "79%",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
  };

  return (
    <div style={triboInfoContainer}>
      <img src={photoUrl} alt="Imagem da tribo" style={imageStyle} />
      <span style={{ fontWeight: "bold", padding: "14px" }}>{username}</span>
    </div>
  );
};
