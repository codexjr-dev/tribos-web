export const PostInfo = ({ photoUrl }) => {
  const postInfo2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const mediaStyle = {
    width: "80%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mStylePhoto = {
    width: "40%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mStyleVideo = {
    width: "40%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  console.log(photoUrl);

  const isVideo =
    photoUrl && (photoUrl.endsWith(".mp4") || photoUrl.endsWith(".webm"));
  const isImage =
    photoUrl &&
    (photoUrl.endsWith(".jpg") ||
      photoUrl.endsWith(".png") ||
      photoUrl.endsWith(".gif") ||
      photoUrl.endsWith(".jpeg"));

  return (
    <div style={postInfo2}>
      {isImage ? (
        <div style={mediaStyle}>
          <img src={photoUrl} alt="post da tribo" style={mStylePhoto} />
        </div>
      ) : isVideo ? (
        <div style={mediaStyle}>
          <video src={photoUrl} controls style={mStyleVideo} />
        </div>
      ) : null}
    </div>
  );
};
