import styles from "./styles.module.css";
import CloseIcon from "../../assets/icons/close-icon.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import SaveIcon from "../../assets/icons/save-icon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { findTriboById, payCacique } from "../../services/api";
import Loading from "../Loading";
import { formatISO } from "date-fns";
import { toast } from "react-toastify";

export const PaymentDetails = ({ handleClose, details }) => {
  const [editModeActive, setEditModeActive] = useState(Boolean(false));
  const [amountPaid, setAmountPaid] = useState(Number(details.caciquePartPaid));
  const [triboInfo, setTriboInfo] = useState({});

  const handleClickEditMode = () => {
    if (editModeActive) {
      handlePayCacique();
      setEditModeActive(false);
    } else {
      setEditModeActive(true);
      toast.info("Modo de edição ATIVADO.");
    }
  };

  const handleSetPaidAmount = (event) => {
    let input = event.target.value;
    setAmountPaid(input);
  };

  const handlePayCacique = async () => {
    if (
      Number(details.caciquePartPaid) + Number(amountPaid) >
      details.caciquePart
    ) {
      toast.error(
        "Valor é maior que o necessário. Por favor, tente novamente."
      );
      setAmountPaid(details.caciquePartPaid);
    } else if (!amountPaid) {
      setAmountPaid(0);
    } else {
      await payCacique(details._id, amountPaid);
      toast.success("Pagamento adicionado com SUCESSO!");
    }
  };

  useEffect(() => {
    async function loadAll() {
      setTriboInfo(await findTriboById(details.tribo._id));
    }

    loadAll();
  }, [editModeActive]);

  return (
    <>
      {!triboInfo.tribo ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div className={styles.generalInfo}>
            <div className={styles.header}>
              <h2>Informações Gerais</h2>
              <img src={CloseIcon} alt="Fechar" onClick={() => handleClose()} />
            </div>
            <span>
              <span>Tribo: </span>
              <b>{details.tribo.name}</b>
            </span>
            <span>
              <span>Membros: </span>
              <b>{triboInfo.tribo.members.length}</b>
            </span>
            <span>
              <span>Criada em: </span>
              <b>
                {formatISO(new Date(triboInfo.tribo.createdAt), {
                  representation: "date",
                })}
              </b>
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
              <span>{details.caciquePix}</span>
            </div>
          </div>
          <div className={styles.values}>
            <h2>Valores</h2>
            <div className={styles.info}>
              <div id={styles.amount}>
                <h3>Total</h3>
                <span>R$ {Number(details.caciquePart).toFixed(2)}</span>
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
                    onChange={(e) => {
                      handleSetPaidAmount(e);
                    }}
                    value={amountPaid}
                    disabled={!editModeActive}
                    id={editModeActive ? styles.editActive : ""}
                  />
                </span>
              </div>
              <div id={styles.remainder}>
                <h3>Restante</h3>
                <span>
                  {editModeActive
                    ? `R$ ${Number(
                        details.caciquePart -
                          (Number(amountPaid) + Number(details.caciquePartPaid))
                      ).toFixed(2)}`
                    : `R$ ${Number(details.caciquePart - amountPaid).toFixed(
                        2
                      )}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
