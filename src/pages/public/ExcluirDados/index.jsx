import { useState } from "react";
import styles from "./styles.module.css";
import { removeUserFromWeb } from "../../../services/api";

export const ExcluirDados = () => {
    const [confirm, setConfirm] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState("")

    const handleCheck = (e) => {
        setConfirm(e.target.checked);
    }

    const [hasSent, setHasSent] = useState(false);

    const handleButton = async () => {
        if (!confirm) return;

        const response = await removeUserFromWeb(username, password)
        if(response) setMessage("Requisição feita com sucesso. Seus dados serão logo removidos do sistema.")
        else setMessage("Erro ao fazer a requisição. Tente novamente mais tarde.")
        

        // TODO: request

        setHasSent(true);
    }

    return <>
    <div className={styles.outer}>
        <div className={styles.container}>
            {!hasSent ? <>
                <label>
                    <p>Usuário</p>
                    <input type="text" placeholder="usuario" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Senha</p>
                    <input type="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    <input type="checkbox" onChange={handleCheck} />
                    <p>Eu confirmo que quero deletar todos os dados do meu usuario do sistema.</p>
                </label>
                <button disabled={!confirm || (!username || username.trim() === "") || (!password || password.trim() === "")} onClick={handleButton}>
                    Confirmar
                </button>
            </>
            : <>
                <p>{message}</p>
            </>}
        </div>
    </div>
    </>
};