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
  { label: "Mês", value: "month" },
  { label: "Ano", value: "year" },
];

export const spamOptions = [
  { label: "Mais Recentes", value: "time" },
  { label: "Mais Denunciados", value: "quantity" },
];

export const mapLabelToValueType = (label) => {
  switch (label) {
    case "users":
      return "Usuários";
    case "companies":
      return "Empresas";
    case "tribos":
      return "Tribos";
    case "day":
      return "Dia";
    case "month":
      return "Mês";
    case "year":
      return "Ano";
    default:
      throw new Error("Valor inválido.");
  }
};


