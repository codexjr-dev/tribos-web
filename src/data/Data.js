import {
  subMonths,
  eachMonthOfInterval,
  startOfMonth,
  format,
  getMonth,
  getDay,
  getYear,
} from "date-fns";

import ptBR from "date-fns/locale/pt-BR";
import { getStatiticsByDate } from "../services/api";

export const ChartData = [
  {
    id: 1,
    month: "Abril",
    userGain: 500,
    userLost: 25,
  },
  {
    id: 2,
    month: "Maio",
    userGain: 872,
    userLost: 47,
  },
  {
    id: 3,
    month: "Junho",
    userGain: 847,
    userLost: 39,
  },
  {
    id: 4,
    month: "Julho",
    userGain: 2096,
    userLost: 52,
  },
  {
    id: 5,
    month: "Agosto",
    userGain: 283,
    userLost: 84,
  },
  {
    id: 6,
    month: "Setembro",
    userGain: 1409,
    userLost: 43,
  },
];

export const priceTable = [
  {
    id: 1,
    min: 0,
    price: 250,
    tax: 50,
    common: 60,
    master: 140,
  },
  {
    id: 2,
    min: 500,
    price: 300,
    tax: 60,
    common: 72,
    master: 168,
  },
  {
    id: 3,
    min: 1000,
    price: 400,
    tax: 80,
    common: 96,
    master: 224,
  },
  {
    id: 4,
    min: 2000,
    price: 480,
    tax: 96,
    common: 115.2,
    master: 268.8,
  },
  {
    id: 5,
    min: 4000,
    price: 605,
    tax: 121,
    common: 145.2,
    master: 338.8,
  },
  {
    id: 6,
    min: 8000,
    price: 690,
    tax: 138,
    common: 165.6,
    master: 386.4,
  },
  {
    id: 7,
    min: 16000,
    price: 890,
    tax: 178,
    common: 213.6,
    master: 498.4,
  },
  {
    id: 8,
    min: 32000,
    price: 124,
    tax: 249,
    common: 298.8,
    master: 697.2,
  },
  {
    id: 9,
    min: 64000,
    price: 185,
    tax: 370,
    common: 444,
    master: 1036,
  },
];

export const paymentListData = [
  {
    id: 1,
    name: "Codex",
    value: 245,
    tax: 49,
    common: 58.8,
    master: 137.2,
  },
  {
    id: 2,
    name: "Gatinhos muitíssimo fofos fofíssimos e talvez malvados",
    value: 245,
    tax: 49,
    common: 58.8,
    master: 137.2,
  },
  {
    id: 3,
    name: "Cavaaalo",
    value: 245,
    tax: 49,
    common: 58.8,
    master: 137.2,
  },
  {
    id: 4,
    name: "Ai meu deeus",
    value: 245,
    tax: 49,
    common: 58.8,
    master: 137.2,
  },
  {
    id: 5,
    name: "Ele gosta",
    value: 245,
    tax: 49,
    common: 58.8,
    master: 137.2,
  },
];

export const generalFinances = [
  {
    id: 1,
    label: "Imposto",
    value: 550.95,
  },
  {
    id: 2,
    label: "Cacique",
    value: 661.14,
  },
  {
    id: 3,
    label: "Tribo Master",
    value: 1542.66,
  },
];

export const FeedbackData = [
  {
    user: "matheusforlan",
    feedback:
      "O sistema não está fazendo login por favor, consertem urgentemente",
    time: "1h",
  },
  {
    user: "lucipa",
    feedback: "Tá muito brabo, mané",
    time: "1d",
  },
  {
    user: "casimiro",
    feedback: "O silêncio não comete erros.",
    time: "16h",
  },
  {
    user: "rodrigoFaro",
    feedback: "Dança gatinho dança",
    time: "1h",
  },
  {
    user: "mr.lorem",
    feedback:
      "Lorem ipsum sula mfineinfewmfoe wooceoclolewolec olomcoei inienioo m manurnoaldjaijil",
    time: "1h",
  },
];

export const ErrorData = [
  {
    user: "matheusforlan",
    feedback:
      "O sistema não está fazendo login por favor, consertem urgentemente!!!",
    image:
      "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
    time: "1h",
  },

  {
    user: "lucipa",
    feedback: "Não consigo me cadastrar, mané!!!",
    image: "",
    time: "5d",
  },
];

export const PostData = [
  {
    icon: "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
    user: "matheusforlan",
    image:
      "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
    subtitle: "São João de Caruaru é melhor que o de Campina Grande",
    complaints: 5,
    time: "3h",
  },
];

export const ProfileData = [
  {
    icon: "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
    name: "Matheus Forlán",
    user: "matheusforlan",
    time: "30m",
    complaints: 8,
  },
  {
    icon: "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
    name: "North America Memes",
    user: "NorthAmericaMemes",
    time: "7d",
    complaints: 85,
  },
];

const getLastSixMonthObject = () => {
  const list = [];

  const today = new Date();
  const sixMonthsAgo = subMonths(today, 6);

  const end = startOfMonth(today);
  const start = startOfMonth(sixMonthsAgo);

  const result = eachMonthOfInterval({ start: start, end: end });

  result.map((date, index, array) => {
    if (index === array.length - 1) {
      // ignorar
    } else {
      list.push({
        currentDate: `${getYear(date)}-${getMonth(date) + 1 < 10 ? "0" : ""}${
          getMonth(date) + 1
        }`,
        nextDate: `${getYear(array[index + 1])}-${
          getMonth(array[index + 1]) + 1 < 10 ? "0" : ""
        }${getMonth(array[index + 1]) + 1}`,
        month: `${format(date, "MMMM", { locale: ptBR })}`,
        stats: null,
      });
    }
  });

  return list;
};

export const getLastSixMonthStatistics = async (type) => {
  const list = getLastSixMonthObject();

  list.map(async (month) => {
    month.stats = await getStatiticsByDate(
      type,
      month.currentDate,
      month.nextDate
    );
  });
  return list;
};
