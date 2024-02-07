import { React, useEffect, useState } from "react";
import LeftArrowIcon from "../../assets/icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { getAllUsers, redefinePassword } from "../../services/api";
import { useCallback } from "react";

export const ChangePassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPassword2, setnewPassword2] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const validateForm = useCallback(() => {
    return email !== "" && newPassword === newPassword2;
  }, [email, newPassword, newPassword2]);

  const handleClick = useCallback(() => {
    if (validateForm()) {
      redefinePassword(email, newPassword);
    } else {
      alert("Por favor, verifique suas informações.");
    }
  }, [email, newPassword, validateForm]);

  return (
    <div className={styles.container}>
      <header
        style={{ marginBottom: "3rem", display: "flex", alignItems: "center" }}
      >
        <div onClick={() => navigate("/dashboard/day")}>
          <img src={LeftArrowIcon} alt="Voltar" />
          <h2> Alterar Senha </h2>
        </div>
      </header>
      <div>
        <p>Email</p>
        <input
          type="name"
          placeholder="Email"
          className={styles.userInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Nova senha</p>
        <input
          type={showPassword}
          placeholder="Nova senha"
          className={styles.userInput}
          setpassword={showPassword}
          value={newPassword}
          onChange={(e) => setnewPassword(e.target.value)}
        />
        <p>Confirmar senha</p>
        <input
          type={showPassword}
          placeholder="Digite novamente a senha"
          className={styles.userInput}
          setpassword={showPassword}
          value={newPassword2}
          onChange={(e) => setnewPassword2(e.target.value)}
        />
      </div>
      <div style={{ padding: 30 }}>
        <button disabled={!validateForm()} onClick={handleClick}>
          Salvar
        </button>
      </div>
    </div>
  );
};
