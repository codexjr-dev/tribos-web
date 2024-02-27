import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import { reportPost } from "../../../../services/api";

const MotivoDenuncia = [
  "Violência",
  "Conteúdo ofensivo",
  "Conteúdo impróprio",
  "Discurso de ódio",
  "Assédio ou bullying",
];

export const ReportModal = ({ idPost, onDenunciation, onClose }) => {
  const [motivoSelecionado, setMotivoSelecionado] = useState(0);

  const handleMotivoSelecionadoChange = (e) => {
    setMotivoSelecionado(e.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  const handleDenunciation = async () => {
    await reportPost(idPost, motivoSelecionado);
    onDenunciation(motivoSelecionado);
  };

  console.log(idPost, motivoSelecionado);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>motivo da denúncia</h2>
        <select
          className={styles.selectMotivo}
          name="motivo"
          id="motivo"
          value={motivoSelecionado}
          onChange={handleMotivoSelecionadoChange}
        >
          {MotivoDenuncia.map((motivo, index) => (
            <option key={motivo} value={index}>
              {motivo}
            </option>
          ))}
        </select>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            type="button"
            className={styles.reportButton}
            onClick={handleDenunciation}
          >
            Denunciar
          </button>
        </div>
      </div>
    </div>
  );
};
