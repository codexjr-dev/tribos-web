import styles from "./styles.module.css";
import CloseIcon from "../../assets/icons/close-icon.svg";
import EditIcon from "../../assets/icons/edit-icon.svg";
import SaveIcon from "../../assets/icons/save-icon.svg";
import { useEffect } from "react";
import { useState } from "react";
import { findTriboById, payCacique, updateCaciquePayment } from "../../services/api";
import Loading from "../Loading";
import { formatISO } from "date-fns";
import { toast } from "react-toastify";
import { chargePayment } from "../../services/api"

export const PaymentDetails = ({ handleClose, details }) => {
  const [editModeActive, setEditModeActive] = useState(Boolean(true));
  const [amountPaid, setAmountPaid] = useState(Number(details.caciquePartPaid));
  const [triboInfo, setTriboInfo] = useState({});
  const [caciquePaid, setCaciquePaid] = useState(details.caciquePaid);
  const [showChargeMsg, setShowChargeMsg] = useState(false);


  console.log("Detalhes da tribo")
  console.log(details)

  const handleClickEditMode = () => {
    if (editModeActive) {
      handlePayCacique();
      setEditModeActive(false);
    } else {
      setEditModeActive(true);
      toast.info("Modo de edição ATIVADO.");
    }
  };


  const handleCheckbox = async () =>  {
    setCaciquePaid(!caciquePaid)
    await updateCaciquePayment(details._id)
  }

  const handleSetPaidAmount = (event) => {
    let input = event.target.value;
    setAmountPaid(input);
  };

  const sendChargeNotification = async () => {
    const res = await chargePayment(details);
    
    if (res) {
      setShowChargeMsg(true)
      setTimeout(() => {
        setShowChargeMsg(false);
      }, 2000);
    }
  }

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
      await payCacique(details._id, details.caciquePart);
      toast.success("Pagamento adicionado com SUCESSO!");
    }
  };

  useEffect(() => {
    async function loadAll() {
      setTriboInfo(await findTriboById(details.tribo._id));
    }

    loadAll();
  }, [editModeActive, details.tribo._id]);

  function formatDate(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}-${mes}-${ano}`;
}


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
                {formatDate(new Date(triboInfo.tribo.createdAt))}
              </b>
            </span>
          </div>
          <div className={styles.paymentInfo}>
            <h2>Informações de Pagamento</h2>
            <div id={styles.owner}>
              <h3>Proprietário</h3>
              <span>{details.tribo?.creator?.name}</span>
            </div>
            <div className={styles.ownerWrapper}>
              <div id={styles.owner}>
                <h3>Chave PIX</h3>
                <span>{details.tribo?.creator?.chavePix ?? "Não adicionou a chave pix." }</span>
              </div>
              {
                !details.tribo?.creator?.chavePix &&
                  <div className={styles.cobrarWrapper}>
                    <button className={styles.cobrarCheckbox} onClick={sendChargeNotification}>Cobrar Usuario</button>
                    {showChargeMsg && <span style={{fontSize: "12px"}}>Cobrança enviada</span> }
                  </div>
              }
            </div>
            <div id={styles.key}>
              <h3>Banco do PIX</h3>
              <span>{details.tribo.creator.bancoPix ?? "Não adicionou o banco do pix."}</span>
            </div>
            <div id={styles.key} style={{marginTop: "15px"}}>
              <h3>Data do Pagamento</h3>
              <span>{details?.paymentDate ?  formatDate(new Date(details?.paymentDate)) :  "Data não atualizada!" }</span>
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
                  {/*<img
                    src={editModeActive ? SaveIcon : EditIcon}
                    alt="Editar"
                    onClick={() => handleClickEditMode()}
              />*/}
                </div>
                <span>
                  <input
                    type="checkbox"
                    onChange={handleCheckbox}
                    checked={caciquePaid}
                    className={styles.checkbox}
                    id={editModeActive ? styles.editActive : ""}
                  />
                </span>
              </div>
              { /*<div id={styles.remainder}>
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
                    </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
