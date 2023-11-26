export const InfoProfile = ({ numero, descricao }) => {
  const infoProfileContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const numeroContainer = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const descricaoContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <p style={numeroContainer}>{numero}</p>
      <p style={descricaoContainer}>{descricao}</p>
    </div>
  );
};
