export const ProfileInfo = ({ photoUrl }) => {
  const postInfoContainer = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "grid",
    rowGap: "20px",
    columnGap: "20px",
    gridTemplateColumns: "repeat(3, 2fr)",
    gridTemplateRows: "repeat(3, 2fr)",
  };

  return (
    <div style={postInfoContainer}>
      <img src={photoUrl} alt="post da tribo" />
    </div>
  );
};
