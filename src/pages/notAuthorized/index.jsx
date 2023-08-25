import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export const NotAuthorized = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h1>
          Ops... Você não pode acessar <br /> essa rota.
        </h1>
        <h3>Primeiro faça o login no sistema</h3>
        <button id={styles.button} onClick={() => navigate('/')}>Fazer o login</button>
      </div>
    </div>
  );
};
