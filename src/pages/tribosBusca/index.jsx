import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { useState, useEffect } from "react";
import {
  api,
  privatePosts,
  getTriboById,
  getPrivateTribos,
} from "../../services/api";
import styles from "./styles.module.css";

export const TribosBusca = () => {
  const [tribos, setTribos] = useState([]);
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tribosFiltradas, setTribosFiltradas] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsData = await privatePosts();
      setPosts(postsData);

      const tribos = await getPrivateTribos();

      setTribos(tribos.tribos);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  function handleInputChange(newInput) {
    setBusca(newInput);
    if (newInput === "") {
      setTribosFiltradas(tribos.map((tribo) => tribo.username.toLowerCase()));
    } else {
      setTribosFiltradas(
        tribos
          .filter((tribo) =>
            tribo.username.toLowerCase().includes(newInput.toLowerCase())
          )
          .map((tribo) => tribo.username)
      );
    }
  }

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <header className={styles.tribosTittle}>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <h2> Buscar tribos </h2>
          </div>
        </header>
        <div>
          <input
            type="text"
            value={busca}
            onChange={(ev) => handleInputChange(ev.target.value)}
            className={styles.userInput}
            style={{
              borderRadius: "10px",
              borderColor: "#8127bb",
              width: "300px",
              height: "35px",
            }}
          />
          <ul>
            {tribosFiltradas.map((username) => (
              <li
                onClick={() => {
                  const tribo = tribos.find((t) => t.username === username);
                  navigate(`/tribos/profile/${tribo._id}`);
                }}
              >
                {username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
