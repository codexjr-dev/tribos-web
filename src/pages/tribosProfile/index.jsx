import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { ProfileInfo } from "./components/profileInfo";
import { TriboInfo } from "./components/triboInfo";
import { api, privatePosts, getTriboById } from "../../services/api";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const TribosProfile = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [tribo, setTribo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { triboId } = useParams();

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await privatePosts(triboId);
      const postsFromTribo = allPosts.filter(
        (post) => post.tribo._id === triboId
      );

      setPosts(postsFromTribo);

      return Promise.resolve();
    }

    async function loadTribos() {
      const tribo = await getTriboById(triboId);
      setTribo(tribo);
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
      <div className={styles.container}>
        <header>
          <div
            onClick={() => navigate("/tribos")}
            className={styles.tribosTittle}
          >
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> {tribo.tribo.username} </h2>
          </div>
        </header>
        <div>
          <TriboInfo
            photoUrl={tribo.tribo.profilePic.url}
            title={tribo.tribo.name}
            username={tribo.tribo.username}
          />
        </div>
        <div className={styles.triboPostContainer}>
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
