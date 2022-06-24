import styles from "./styles.module.css";
import TribosLogo from "../../assets/logo-tribos.svg";
import EyeOff from "../../assets/eye-off.svg";
import { useCallback, useState } from "react";
import { useContext } from "react";
import { AuthContext, useAuth } from "../../contexts/auth";
import { useEffect } from "react";
import { useRef } from "react";
import { authenticate } from "../../services/api";

/*
    Esse padrão de uso de css se chama css modules
    
    ** É importante usar pra não dar choque de estilos no css
    em diferentes arquivos.

    Basicamente é assim o uso.
*/

const Login = () => {
  const { signed, setUser } = useAuth();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [showPassword, setShowPassword] = useState("password");

  const handleClick = useCallback(() => {
    if (showPassword === "password") {
      setShowPassword("name");
    } else {
      setShowPassword("password");
    }
  });

  const handleLogin = async () => {
    const response = await authenticate(
      usernameRef.current.value,
      passwordRef.current.value
    );
    response ? saveUser(response) : alert("Deu erro.");
  };

  const saveUser = (data) => {
    setUser(data.user);
    localStorage.setItem("@App:user", JSON.stringify(data.user));
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.title}> Login </div>

        <input
          className={styles.userInput}
          type="user"
          name="user"
          placeholder="Usuário"
          ref={usernameRef}
        />

        <input
          className={styles.passwordInput}
          type={showPassword}
          name="password"
          placeholder="Senha"
          ref={passwordRef}
        />

        <button className={styles.eyeOffButton} onClick={handleClick}>
          <img
            src={EyeOff}
            alt="Ícone de visualizar a senha"
            className={styles.eyeOff}
          />
        </button>

        <button className={styles.loginButton} onClick={handleLogin}>
          Entrar
        </button>
      </div>

      <div className={styles.logo}>
        <img src={TribosLogo} alt="Logo da Tribos" />
      </div>
    </div>
  );
};
export default Login;