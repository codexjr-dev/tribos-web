import styles from "./styles.module.css";
import CloseIcon from "../../assets/icons/close-icon.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import SaveIcon from "../../assets/icons/save-icon.svg";
import { useEffect } from "react";
import { useState } from "react";

export const PaymentDetails = ({ handleClose, details }) => {
  const [editModeActive, setEditModeActive] = useState(false);
  const [amountPaid, setAmountPaid] = useState(0);

  const total = details.common;
  const remainer = total - amountPaid;

  const handleClickEditMode = () => {
    setEditModeActive(!editModeActive);
  };

  const handleSetPaidAmount = (event) => {
    if (event.target.value > total || event.target.value < 0) {
      alert('Valor inválido.')
    } else {
      setAmountPaid(event.target.value);
    }
  };

  useEffect(() => {
    console.log(details);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.generalInfo}>
        <div className={styles.header}>
          <h2>Informações Gerais</h2>
          <img src={CloseIcon} alt="Fechar" onClick={() => handleClose()} />
        </div>
        <span>{details.name}</span>
        <span>
          <b>23</b> Membros
        </span>
        <span>
          Criada em: <b>24/05/2022</b>
        </span>
      </div>
      <div className={styles.paymentInfo}>
        <h2>Informações de Pagamento</h2>
        <div id={styles.owner}>
          <h3>Proprietário</h3>
          <span>Matheus Forlán Andrade</span>
        </div>
        <div id={styles.key}>
          <h3>Chave PIX</h3>
          <span>092490345678</span>
        </div>
      </div>
      <div className={styles.values}>
        <h2>Valores</h2>
        <div className={styles.info}>
          <div id={styles.amount}>
            <h3>Total</h3>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div id={styles.paid}>
            <div id={styles.edit}>
              <h3>Pago</h3>
              <img
                src={editModeActive ? SaveIcon : EditIcon}
                alt="Editar"
                onClick={() => handleClickEditMode()}
              />
            </div>
            <span>
              R$
              <input
                type="number"
                onChange={(e) => handleSetPaidAmount(e)}
                value={amountPaid}
                disabled={!editModeActive}
                id={editModeActive ? styles.editActive : ""}
              />
            </span>
          </div>
          <div id={styles.remainder}>
            <h3>Restante</h3>
            <span>R$ {remainer.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
