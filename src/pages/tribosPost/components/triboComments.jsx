export const TriboComments = ({ photoUrl, username, comment }) => {
  const styleComment = {
    width: "100px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  };

  const photoContainer = {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
  };

  const commentContainer = {
    whiteSpace: "nowrap",
  };

  return (
    <div style={styleComment}>
      <img src={photoUrl} alt="post da tribo" style={photoContainer} />
      <span style={{ fontWeight: "bold", padding: "6px" }}>{username}</span>
      <span style={commentContainer}>{comment}</span>
    </div>
  );
};
