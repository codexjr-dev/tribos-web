import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { ProfileInfo } from "./components/profileInfo";
import { TriboInfo } from "./components/triboInfo";
import { api, privatePosts, getTriboById } from "../../services/api";
import { useEffect, useState } from "react";

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  flexDirection: "column",
  position: "relative",
  top: "60px",
};

const tribosTittle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  top: 0,
  width: "100%",
  height: "50px",
  paddingBottom: "20px",
};

const triboPostContainer = {
  flexDirection: "column",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  position: "relative",
  paddingbottom: "20px",
};

const infoProfileContainer = {
  flexDirection: "column",
  display: "grid",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(4, 1fr)",
};

export const TribosProfile = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [tribo, setTribo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { triboId } = useParams();

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await privatePosts();
      const postsFromTribo = allPosts.filter(
        (post) => post.tribo._id === triboId
      );

      setPosts(postsFromTribo);

      return Promise.resolve();
    }

    async function loadTribos() {
      const tribo = await getTriboById(triboId);
      setTribo(tribo);
      console.log(posts);
      return Promise.resolve();
    }

    async function fetchData() {
      await Promise.all([loadPosts(), loadTribos()]);
      setIsLoading(false);
    }

    fetchData();
  }, [triboId]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> {tribo.tribo.username} </span>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <div>
          <TriboInfo
            photoUrl={tribo.tribo.profilePic.url}
            title={tribo.tribo.name}
            username={tribo.tribo.username}
          />
        </div>
        <div style={triboPostContainer}>
          {posts.map((post, index) => {
            return (
              <ProfileInfo
                key={post.content[0].key}
                triboId={post.tribo._id}
                mediaType={post.content[0].type}
                postId={post._id}
                photoUrl={post.content[0].url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
