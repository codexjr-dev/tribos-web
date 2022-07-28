import UserGainIcon from "../../assets/icons/user-gain-icon.svg";
import TotalUserIcon from "../../assets/icons/total-user-icon.svg";
import UserLost from "../../assets/icons/user-lost-icon.svg";
import TotalTribosIcon from "../../assets/icons/total-group-icon.svg";
import TribosGainIcon from "../../assets/icons/group-gain-icon.svg";
import TribosLostIcon from "../../assets/icons/group-lost-icon.svg";
import CompanyTotalIcon from "../../assets/icons/total-company-icon.svg";
import CompanyGainIcon from "../../assets/icons/company-gain-icon.svg";
import CompanyLostIcon from "../../assets/icons/company-lost-icon.svg";

export const MapIconToLabel = (label, type) => {
  if (label === "users") {
    switch (type) {
      case "gain":
        return UserGainIcon;
      case "total":
        return TotalUserIcon;
      case "lost":
        return UserLost;
      default:
        throw new Error("ícone inválido.");
    }
  } else if (label === "companies") {
    switch (type) {
      case "gain":
        return CompanyGainIcon;
      case "total":
        return CompanyTotalIcon;
      case "lost":
        return CompanyLostIcon;
      default:
        throw new Error("ícone inválido.");
    }
  } else if (label === "tribos") {
    switch (type) {
      case "gain":
        return TribosGainIcon;
      case "total":
        return TotalTribosIcon;
      case "lost":
        return TribosLostIcon;
      default:
        throw new Error("ícone inválido.");
    }
  }
};
