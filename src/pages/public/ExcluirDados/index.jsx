import { useState } from "react";
import styles from "./styles.module.css";

export const ExcluirDados = () => {
    const [confirm, setConfirm] = useState(false);

    const handleCheck = (e) => {
        setConfirm(e.target.checked);
    }

    const [hasSent, setHasSent] = useState(false);

    const handleButton = () => {
        if (!confirm) return;

        // TODO: request

        setHasSent(true);
    }

    return <>
    <div className={styles.outer}>
        <div className={styles.container}>
            {!hasSent ? <>
                <label>
                    <p>Usuário</p>
                    <input type="text" placeholder="usuario" />
                </label>
                <label>
                    <p>Senha</p>
                    <input type="password" placeholder="***" />
                </label>
                <label>
                    <input type="checkbox" onChange={handleCheck} />
                    <p>Eu confirmo que quero deletar todos os dados do meu usuario do sistema.</p>
                </label>
                <button disabled={!confirm} onClick={handleButton}>
                    Confirmar
                </button>
            </>
            : <>
                <p>Requisição feita com sucesso. Seus dados serão logo removidos do sistema.</p>
            </>}
        </div>
    </div>
    </>
};