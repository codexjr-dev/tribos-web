export const TriboInfo = ({
  photoUrl,
  title,
  username,
  seguirTribo,
  descricao,
}) => {
  const triboInfoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div>
      <img src={photoUrl} alt="Imagem da tribo" />
      <span style={{ fontWeight: "bold", padding: "24px" }}>{username}</span>
      <button>{seguirTribo}</button>
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p>{descricao}</p>
    </div>
  );
};
