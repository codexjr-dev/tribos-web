import UserGainIcon from "../assets/icons/user-gain-icon.svg";
import TotalUserIcon from "../assets/icons/total-user-icon.svg";
import UserLost from "../assets/icons/user-lost-icon.svg";
import TotalTribosIcon from "../assets/icons/total-group-icon.svg";
import TribosGainIcon from "../assets/icons/group-gain-icon.svg";
import TribosLostIcon from "../assets/icons/group-lost-icon.svg";
import AnnouncementTotalIcon from "../assets/icons/total-announcement-icon.svg";
import AnnouncementGainIcon from "../assets/icons/announcement-gain-icon.svg";
import AnnouncementLostIcon from "../assets/icons/announcement-lost-icon.svg";

export const getMax = (array) => {
  let max = 0;
  array.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });
  return max;
};

export const getSum = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

export const formatInfo = (value) => {
  let output = "";

  if (value < 1000) {
    output = `${value}`;
  } else {
    if (value % 1000 === 0) {
      output = `${value / 1000}K`;
    } else if (value % 1000) {
      output = `${(value / 1000).toFixed(1)}K`;
    }
  }
  return output;
};

export const typeOptions = [
  { label: "Usuários", value: "users" },
  { label: "Anúncios", value: "ads" },
  { label: "Tribos", value: "groups" },
];

export const intervalOptions = [
  { label: "Dia", value: "day" },
  { label: "Semana", value: "week" },
  { label: "Mês", value: "month" },
];

export const spamOptions = [
  { label: "Mais Recentes", value: "time" },
  { label: "Mais Denunciados", value: "quantity" },
];

export const mapLabelToValueType = (label) => {
  switch (label) {
    case "users":
      return "Usuários";
    case "announcements":
      return "Anúncios";
    case "tribos":
      return "Tribos";
    case "day":
      return "Dia";
    case "month":
      return "Mês";
    case "week":
      return "Semana";
    default:
      throw new Error("Valor inválido.");
  }
};

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
  } else if (label === "announcements") {
    switch (type) {
      case "gain":
        return AnnouncementGainIcon;
      case "total":
        return AnnouncementTotalIcon;
      case "lost":
        return AnnouncementLostIcon;
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
