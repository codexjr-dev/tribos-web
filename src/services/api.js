import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos-project.herokuapp.com",
});

export const getStatiticsByDate = async (type, beginDate, finalDate) => {
  let data;
  await api
    .get(`/statistics/${type}/${beginDate}${finalDate ? `/${finalDate}` : ""}`)
    .then((res) => {
      data = res.data;
    })
    .catch((data = null));
  return data;
};

export const getAllReports = async () => {
  let data = null;
  await api
    .get("/report")
    .then((res) => {
      data = res.data;
    })
    .catch((e) => {
      data = null;
    });
  return data;
};

export const getAmountStatistics = async (type) => {
  let data;
  await api
    .get(`/statistics/${type}`)
    .then((res) => {
      data = res.data;
    })
    .catch(data = null);
  return data;
};
