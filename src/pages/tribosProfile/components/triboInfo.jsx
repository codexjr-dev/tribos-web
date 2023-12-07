export const TriboInfo = ({ photoUrl, title, username }) => {
  const triboInfoContainer = {
    width: "92px",
  };

  const imageStyle = {
    borderRadius: "50%",
    width: "52px",
    height: "52px",
  };

  return (
    <div>
      <img src={photoUrl} alt="Imagem da tribo" style={imageStyle} />
      <span style={{ fontWeight: "bold", padding: "24px" }}>{username}</span>
      <p style={{ fontWeight: "bold" }}>{title}</p>
    </div>
  );
};
