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
  sum = array.reduce((sum, value) => {
    return sum + value;
  });
  return sum;
};

export const formatInfo = (value) => {
  let output = "";
  output = value < 1000 ? `${value}` : `${(value / 1000).toFixed(1)}K`;
  return output;
};
