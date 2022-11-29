import {
  subMonths,
  eachMonthOfInterval,
  eachDayOfInterval,
  eachYearOfInterval,
  startOfMonth,
  format,
  getMonth,
  getYear,
  startOfDay,
  subDays,
  getDate,
  subYears,
  formatDistanceToNow,
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

export const getLastThreeYearsObject = () => {
  const list = [];

  const today = new Date();
  const threeYearAgo = subYears(today, 3);

  const end = startOfDay(today);
  const start = startOfDay(threeYearAgo);

  const result = eachYearOfInterval({ start: start, end: end });

  result.forEach((date, index, array) => {
    if (index === array.length - 1) {
      // ignorar
    } else {
      list.push({
        currentDate: `${getYear(date)}`,
        nextDate: `${getYear(array[index + 1])}`,
        label: `${format(date, "y", { locale: ptBR })}`,
        stats: null,
      });
    }
  });

  return list;
};

const getLastSixMonthObject = () => {
  const list = [];

  const today = new Date();
  const sixMonthsAgo = subMonths(today, 6);

  const end = startOfMonth(today);
  const start = startOfMonth(sixMonthsAgo);

  const result = eachMonthOfInterval({ start: start, end: end });

  result.forEach((date, index, array) => {
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
        label: `${format(date, "MMMM", { locale: ptBR })}`,
        stats: null,
      });
    }
  });

  return list;
};

export const getStatistics = async (intervalType, type) => {
  const list = mapIntervalOptionToList(intervalType);
  list.map(async (element, index) => {
    element.stats = await getStatiticsByDate(
      type,
      element.currentDate,
      element.nextDate
    );
  });
  return list;
};

export const getNewStatistics = async (intervalType, type) => {
  const list = await getStatistics(intervalType, type);
  const lastDateIndex = list.length - 1;
  const startDate = list[0].currentDate;
  const endDate = list[lastDateIndex].nextDate;
  const result = await getStatiticsByDate(type, startDate, endDate);
  return result;
};

export const getLastSevenDaysObject = () => {
  const list = [];

  const today = new Date();
  const sevenDaysAgo = subDays(today, 7);

  const end = startOfDay(today);
  const start = startOfDay(sevenDaysAgo);

  const result = eachDayOfInterval({ start: start, end: end });

  result.forEach((date, index, array) => {
    if (index !== array.length - 1) {
      list.push({
        currentDate: `${getYear(date)}-${getMonth(date) + 1 < 10 ? "0" : ""}${
          getMonth(date) + 1
        }-${getDate(date) < 10 ? "0" : ""}${getDate(date)}`,
        nextDate: `${getYear(array[index + 1])}-${
          getMonth(array[index + 1]) + 1 < 10 ? "0" : ""
        }${getMonth(array[index + 1]) + 1}-${
          getDate(array[index + 1]) < 10 ? "0" : ""
        }${getDate(array[index + 1])}`,
        label: `${format(date, "d", { locale: ptBR })}`,
        stats: 0,
      });
    }
  });

  return list;
};

const mapIntervalOptionToList = (intervalType) => {
  let chosenObject = null;
  switch (intervalType) {
    case "day":
      chosenObject = getLastSevenDaysObject();
      break;
    case "month":
      chosenObject = getLastSixMonthObject();
      break;
    case "year":
      chosenObject = getLastThreeYearsObject();
      break;
    default:
      break;
  }

  return chosenObject;
};

export const reportTime = (date) => {
  const result = formatDistanceToNow(new Date(date), { locale: ptBR });
  return result;
};

export const makePriceTable = (table, type) => {
  let caciquePrice = type === "cacique" ? 0.7 : 0.3;
  let masterPrice = type === "master" ? 0.7 : 0.3;

  let arrayPriceTable = [];
  Object.entries(table).forEach(([category, value]) => {
    if (category !== "feed") {
      arrayPriceTable.push({
        id: category,
        price: Number(value).toFixed(2),
        tax: Number(value * 0.2).toFixed(2),
        cacique: Number(value * 0.8 * caciquePrice).toFixed(2),
        master: Number(value * 0.8 * masterPrice).toFixed(2),
      });
    } else {
      arrayPriceTable.push({
        id: category,
        price: Number(value).toFixed(2),
        tax: Number(value * 0.2).toFixed(2),
        cacique: Number(0).toFixed(2),
        master: Number(value * 0.8).toFixed(2),
      });
    }
  });

  return arrayPriceTable;
};

// export const priceTable = [
//   {
//     id: 1,
//     min: 0,
//     price: 250,
//     tax: 50,
//     common: 60,
//     master: 140,
//   },
//   {
//     id: 2,
//     min: 500,
//     price: 300,
//     tax: 60,
//     common: 72,
//     master: 168,
//   },
//   {
//     id: 3,
//     min: 1000,
//     price: 400,
//     tax: 80,
//     common: 96,
//     master: 224,
//   },
//   {
//     id: 4,
//     min: 2000,
//     price: 480,
//     tax: 96,
//     common: 115.2,
//     master: 268.8,
//   },
//   {
//     id: 5,
//     min: 4000,
//     price: 605,
//     tax: 121,
//     common: 145.2,
//     master: 338.8,
//   },
//   {
//     id: 6,
//     min: 8000,
//     price: 690,
//     tax: 138,
//     common: 165.6,
//     master: 386.4,
//   },
//   {
//     id: 7,
//     min: 16000,
//     price: 890,
//     tax: 178,
//     common: 213.6,
//     master: 498.4,
//   },
//   {
//     id: 8,
//     min: 32000,
//     price: 124,
//     tax: 249,
//     common: 298.8,
//     master: 697.2,
//   },
//   {
//     id: 9,
//     min: 64000,
//     price: 185,
//     tax: 370,
//     common: 444,
//     master: 1036,
//   },
// ];
