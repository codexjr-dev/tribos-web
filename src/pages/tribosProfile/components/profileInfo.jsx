import { useNavigate } from "react-router-dom";

export const ProfileInfo = ({ triboId, mediaType, postId, photoUrl }) => {
  const navigate = useNavigate();

  const postInfoContainer = {
    display: "grid",
    placeItems: "center",
    height: "30vh",
    width: "30vh",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div
      style={postInfoContainer}
      onClick={() => navigate(`/tribos/post/${triboId}/${postId}`)}
    >
      {mediaType === "image" ? (
        <img src={photoUrl} alt="post da tribo" style={imageStyle} />
      ) : mediaType === "video" ? (
        <video src={photoUrl} style={imageStyle} controls muted />
      ) : null}
    </div>
  );
};
