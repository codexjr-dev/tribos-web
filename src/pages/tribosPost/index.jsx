import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { PostInfo } from "./components/postInfo";
import { privatePosts } from "../../services/api";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { TriboInfo } from "./components/triboInfo";

export const TribosPost = () => {
  const navigate = useNavigate();

  const { triboId } = useParams();
  const { postId } = useParams();
  const [posts, setPost] = useState([]);

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

  console.log(posts);

  return (
    <div>
      <div className={styles.triboInfo2}>
        <header>
          <div onClick={() => navigate(`/tribos/profile/${triboId}`)}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> Tribos </span>
          </div>
        </header>
      </div>
      <div>
        <div>
          {posts.map((post) => {
            const id = post._id;
            if (id === postId) {
              return (
                <TriboInfo
                  photoUrl={post.tribo.profilePic.url}
                  username={post.tribo.username}
                />
              );
            }
            return null;
          })}
        </div>
        <div>
          {posts.map((post) => {
            const id = post._id;
            if (id === postId) {
              return (
                <PostInfo photoUrl={post.content[0].url} text={post.text} />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
