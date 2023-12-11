import { useState } from "react";
import { ReportModal } from "./ReportModal/ReportModal";

const triboInfoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "79%",
};

const imageStyle = {
  borderRadius: "50%",
  width: "30px",
  height: "30px",
};

const buttonContent = {
  position: "relative",
  left: "284px",
};

export const TriboInfo = ({ photoUrl, username, idPost }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleDenunciation = (motivo) => {
    console.log("Denúncia enviada com o motivo:", motivo);
    setIsReportModalOpen(false);
  };

  console.log({ isReportModalOpen });

  return (
    <div style={triboInfoContainer}>
      {!isReportModalOpen && (
        <>
          <img src={photoUrl} alt="Imagem da tribo" style={imageStyle} />
          <span style={{ fontWeight: "bold", padding: "14px" }}>
            {username}
          </span>
          <button
            onClick={() => setIsReportModalOpen(true)}
            style={buttonContent}
          >
            Denunciar
          </button>
        </>
      )}
      {isReportModalOpen && (
        <ReportModal
          idPost={idPost}
          onDenunciation={handleDenunciation}
          onClose={() => setIsReportModalOpen(false)}
        />
      )}
    </div>
  );
};
