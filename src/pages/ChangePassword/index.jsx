import { React, useEffect, useState } from "react";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import logo from "../../assets/images/logo-pequeno.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/auth";
import { changePasswordWeb } from "../../services/api";
import { useCallback } from "react";

export const ChangePassword = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPassword2, setnewPassword2] = useState("");

  async function handleClick() {
    if (newPassword !== newPassword2) {
      alert("As novas senhas não são iguais. Por favor, tente novamente.");
    } else {
      alert("senha alterada com sucesso");
      changePasswordWeb(password, user._id, newPassword);
      navigate("/dashboard/users/day");
    }
  }

  return (
    <div className={styles.container}>
      <header
        style={{ marginBottom: "3rem", display: "flex", alignItems: "center" }}
      >
        <div onClick={() => navigate(-1)}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Alterar Senha </h2>
        </div>
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate("/dashboard/users/day")}
          style={{ cursor: "pointer", width: "112px" }}
        />
      </header>
      <div>
        <p>Senha atual</p>
        <input
          type="password"
          placeholder="senha atual"
          className={styles.userInput}
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div>
        <p>Nova senha</p>
        <input
          type="password"
          placeholder="digite a nova senha"
          className={styles.userInput}
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
        />
      </div>
      <div>
        <p>Confirmar senha</p>
        <input
          type="password"
          placeholder="digite novamente a senha"
          className={styles.userInput}
          value={newPassword2}
          onChange={(e) => setnewPassword2(e.target.value)}
        />
      </div>
      <div style={{ padding: 30 }}>
        <button
          onClick={async () => {
            await handleClick();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
