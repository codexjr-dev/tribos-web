import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { PostInfo } from "./components/postInfo";
import { privatePosts, findPostComments, reportPost } from "../../services/api";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { TriboInfo } from "./components/triboInfo";
import { TriboComments } from "./components/triboComments";

export const TribosPost = () => {
  const navigate = useNavigate();

  const { triboId } = useParams();
  const { postId } = useParams();
  const [posts, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = await privatePosts();
      setPost(fetchedPost);
    }

    fetchPost();
  }, [postId]);

  useEffect(() => {
    async function fetchComments() {
      const fetchComments = await findPostComments(postId);
      setComments(fetchComments.comments);
    }

    fetchComments();
  }, []);

  if (!posts) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <div className={styles.triboInfoContainer}>
        <header>
          <div onClick={() => navigate(`/tribos/profile/${triboId}`)}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span style={{ fontWeight: "bold" }}> Tribos </span>
          </div>
        </header>
      </div>
      <div>
        {posts.map((post) => {
          const id = post._id;
          if (id === postId) {
            return (
              <div key={id}>
                <TriboInfo
                  photoUrl={post.tribo.profilePic.url}
                  username={post.tribo.username}
                  idPost={postId}
                />
                <PostInfo photoUrl={post.content[0].url} text={post.text} />
              </div>
            );
          }
          return null;
        })}
        <div className={styles.commentsContainer}>
          {comments.map((comment, index) => (
            <TriboComments
              key={index}
              photoUrl={comment.commenter.profilePic.url}
              username={comment.commenter.username}
              comment={comment.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
