import styles from "./styles.module.css";
import TribosLogo from "../../assets/logo-tribos.svg";
import EyeOff from "../../assets/eye-off.svg";
import { useCallback, useState } from "react";

/*
    Esse padrão de uso de css se chama css modules
    
    ** É importante usar pra não dar choque de estilos no css
    em diferentes arquivos.

    Basicamente é assim o uso.
*/



const Login = () => {


    const [showPassword, setShowPassword] = useState("password");

    const handleClick = useCallback ( () => {

        if (showPassword === "password") {
            setShowPassword("name");
        }
        else{
            setShowPassword("password")
        }
    }

    )

    return (

        <div className={styles.container}>
            
            <div className = {styles.loginContainer}>

                <div className={styles.title}> Login </div>
                
                    <input className= {styles.userInput}
                        type = "user"
                        name = "user"
                        placeholder = "Usuário"
                    />

                    <input className= {styles.passwordInput}
                        type = {showPassword}
                        name = "password"
                        placeholder = "Senha"                           
                    />

                    <button className= {styles.eyeOffButton}
                     onClick=
                        {handleClick}              
                     >
                        <img src={EyeOff} alt= "Ícone de visualizar a senha" className={styles.eyeOff}/> 
                    </button>

                

                <button className= {styles.loginButton}>
                    
                    Entrar
                </button>

            </div>

            <div className = {styles.logo}>
                <img src= {TribosLogo} alt= "Logo da Tribos" /> 
            </div>
            


        </div>

        
    )

}
export default Login;