export const PostInfo = ({ photoUrl }) => {
  const postInfo2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "70vh",
  };

  return (
    <div style={postInfo2}>
      <img src={photoUrl} alt="post da tribo" />
    </div>
  );
};
