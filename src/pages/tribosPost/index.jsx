import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { PostInfo } from "./components/postInfo";
import { privatePosts } from "../../services/api";
import { useState, useEffect } from "react";

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "20vh",
  flexDirection: "column",
  fontWeight: "bold",
};

export const TribosPost = () => {
  const navigate = useNavigate();

  const { triboId } = useParams();
  const { postId } = useParams();
  const [posts, setPost] = useState([]);

  console.log(postId);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await privatePosts();
      setPost(fetchedPost);
    }

    fetchPost();
  }, [postId]);

  if (!posts) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div style={triboInfo2}>
        <header>
          <div onClick={() => navigate(`/tribos/profile/${triboId}`)}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> Tribos </span>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
      </div>
      <div>
        {posts.map((post) => {
          const id = post._id;
          if (id === postId) {
            return <PostInfo photoUrl={post.content[0].url} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};
