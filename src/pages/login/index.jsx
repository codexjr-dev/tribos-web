import styles from "./styles.module.css";
import TribosLogo from "../../assets/images/logo-tribos.svg";
import EyeOff from "../../assets/icons/eye-off.svg";
import { useCallback, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authenticate, user } = useAuth();

  const navigate = useNavigate();

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
    const responseData = await authenticate(
      usernameRef.current.value,
      passwordRef.current.value
    );

    if (responseData.user && responseData.token) {
      navigate("/dashboard");
    }
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
