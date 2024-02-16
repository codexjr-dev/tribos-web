import { TriboInfo } from "./components/TriboInfo";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo-pequeno.svg";
import { api, privatePosts, getPrivateTribos } from "../../services/api";
import { useState, useEffect } from "react";

export const TribosHome = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [tribos, setTribos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsData = await privatePosts();
      setPosts(postsData);

      const tribos = await getPrivateTribos();

      setTribos(tribos.tribos);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <header className={styles.tribosTittle}>
          <div onClick={() => navigate("/dashboard/users/week")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Tribos </h2>
          </div>
        </header>
        <main>
          <div className={styles.triboInfoContainer}>
            {tribos.map((tribo) => {
              return (
                <TriboInfo
                  key={tribo._id}
                  triboId={tribo._id}
                  photoUrl={tribo.profilePic.url}
                  username={tribo.username}
                />
              );
            })}
          </div>
        </main>
        <div className={styles.buttonStyle}>
          <button onClick={() => navigate("/tribos/busca")}>Buscar</button>
        </div>
      </div>
    </div>
  );
};
