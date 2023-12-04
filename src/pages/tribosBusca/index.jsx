import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-pequeno.svg";
import { useState, useEffect } from "react";
import { api, privatePosts, getTriboById } from "../../services/api";

const triboInfo2 = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  flexDirection: "column",
};

const tribosTittle = {
  fontWeight: "bold",
  height: "20vh",
  flexDirection: "row",
};

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

      const tempTribos = [];
      for (const post of postsData) {
        const tribo = await getTriboById(post.tribo._id);
        tempTribos.push(tribo);
      }
      setTribos(tempTribos);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setTribosFiltradas(tribos.map((tribo) => tribo.tribo.username));
  }, [tribos]);

  useEffect(() => {
    setTribosFiltradas(
      tribosFiltradas.filter((username) =>
        username.toLowerCase().includes(busca.toLowerCase())
      )
    );
  }, [busca]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  console.log(tribosFiltradas);

  return (
    <div>
      <div style={triboInfo2}>
        <header style={tribosTittle}>
          <div onClick={() => navigate("/tribos")}>
            <img src={LeftArrowIcon} alt="Voltar" />
            <span> Buscar tribos </span>
            <img src={logo} alt="Logo Tribos" />
          </div>
        </header>
        <div>
          <input
            type="text"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
          <ul onClick={() => navigate("/tribos/profile")}>
            {tribosFiltradas.map((username) => (
              <li key={username}>{username}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
