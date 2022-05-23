import styles from "./styles.module.css";

/*
    Esse padrão de uso de css se chama css modules
    
    ** É importante usar pra não dar choque de estilos no css
    em diferentes arquivos.

    Basicamente é assim o uso.
*/

const Login = () => {
    return (
        <div className={styles.container}>
            Essa é a tela de login.
        </div>
    )

}
export default Login;