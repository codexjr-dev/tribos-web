import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1>Ops... Não há nada aqui.</h1>
        <button id={styles.button} onClick={() => navigate("/")}>
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};
