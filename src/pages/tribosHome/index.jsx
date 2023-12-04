import { TriboInfo } from "./components/TriboInfo";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/logo-pequeno.svg";
import { api, privatePosts, getTriboById } from "../../services/api";
import { useState, useEffect } from "react";

const triboInfoContainer = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  display: "grid",
  rowGap: "20px",
  columnGap: "20px",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
};

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  flexDirection: "column",
};

const tribosTittle = {
  fontWeight: "bold",
  height: "10vh",
  flexDirection: "row",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  position: "relative",
  top: "50px",
};

export const TribosHome = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [tribos, setTribos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsData = await privatePosts();
      setPosts(postsData);

      const tempTribos = [];
      for (const post of postsData) {
        const tribo = await getTriboById(post.tribo._id);
        tempTribos.push(tribo);
      }
      setTribos(tempTribos);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/dashboard")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> Tribos </span>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <main>
          <div style={triboInfoContainer}>
            {tribos.slice(0, 4).map((tribo) => {
              return (
                <TriboInfo
                  key={tribo.tribo._id}
                  triboId={tribo.tribo._id}
                  photoUrl={tribo.tribo.profilePic.url}
                  title={tribo.tribo.name}
                  username={tribo.tribo.username}
                />
              );
            })}
          </div>
        </main>
        <div style={buttonStyle}>
          <button onClick={() => navigate("/tribos/busca")}>Buscar</button>
        </div>
      </div>
    </div>
  );
};
