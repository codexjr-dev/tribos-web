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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try{
        setLoading(true);
        const postsData = await privatePosts();
        setPosts(postsData);

        const tribosData = await getPrivateTribos();

        console.log("Resposta completa da API:", tribosData);

        if (tribosData && tribosData.tribos) {
          if (Array.isArray(tribosData.tribos)) {
            setTribos(tribosData.tribos);
          } else {
            const tribosArray = Object.values(tribosData.tribos);
            setTribos(tribosArray);
          }
        } else {
          console.error("Dados de tribos inválidos:", tribosData);
          setTribos([]);
        }
      } catch (error) {
        console.error("erro ao buscar dados:", error);
        setTribos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

 return (
    <div className={styles.container}>
      <header className={styles.tribosTittle}>
        <div onClick={() => navigate("/dashboard/users/day")}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2>Tribos</h2>
        </div>
        <img 
          src={logo} 
          alt="Logo"
          onClick={() => navigate("/dashboard/users/day")}
        />
      </header>
      
      <main style={{ width: "100%" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Carregando tribos...
          </div>
        ) : tribos.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Nenhuma tribo encontrada
          </div>
        ) : (
          <div className={styles.triboInfoContainer}>
            {tribos.map((tribo) => (
              <TriboInfo
                key={tribo._id}
                triboId={tribo._id}
                photoUrl={tribo.profilePic?.url}
                username={tribo.username}
              />
            ))}
          </div>
        )}
      </main>
      
      <div className={styles.buttonStyle}>
        <button onClick={() => navigate("/tribos/busca")}>Buscar</button>
      </div>
    </div>
  );
};
