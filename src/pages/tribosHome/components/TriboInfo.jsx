import { useNavigate } from "react-router-dom";
import styles from "./TriboInfo.module.css";

export const TriboInfo = ({ triboId, photoUrl, username }) => {
  const navigate = useNavigate();

  console.log("TriboInfo:", { photoUrl, username, triboId });

  return (
    <div className={styles.triboInfoCard}>
      <div className={styles.imageContainer}>
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={`Foto da tribo ${username}`}
            className={styles.triboImage}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <span>{username?.charAt(0)?.toUpperCase() || "T"}</span>
          </div>
        )}
      </div>
      
      <div className={styles.triboInfo}>
        <span className={styles.username}>{username}</span>
        <button 
          className={styles.viewProfileButton}
          onClick={() => navigate(`/tribos/profile/${triboId}`)}
        >
          Ver perfil
        </button>
      </div>
    </div>
  );
};