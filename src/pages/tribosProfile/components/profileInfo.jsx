import { useNavigate } from "react-router-dom";

export const ProfileInfo = ({ tribosId, photoUrl }) => {
  const navigate = useNavigate();

  const postInfoContainer = {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    display: "grid",
    rowGap: "20px",
    columnGap: "20px",
    gridTemplateColumns: "repeat(3, 2fr)",
    gridTemplateRows: "repeat(3, 2fr)",
    overflow: "auto",
  };

  return (
    <div style={postInfoContainer}>
      <img
        onClick={() => navigate(`/tribos/post/${tribosId}`)}
        src={photoUrl}
        alt="post da tribo"
      />
    </div>
  );
};
