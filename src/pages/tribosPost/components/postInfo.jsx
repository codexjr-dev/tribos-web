export const PostInfo = ({ photoUrl, text }) => {
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
    flexDirection: "column",
  };

  const mStylePhoto = {
    width: "45%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const mStyleVideo = {
    width: "45%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const styleText = {
    width: "45%",
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
          <p style={styleText}>{text}</p>
        </div>
      ) : isVideo ? (
        <div style={mediaStyle}>
          <video src={photoUrl} controls style={mStyleVideo} />
          <p style={styleText}>{text}</p>
        </div>
      ) : null}
    </div>
  );
};
