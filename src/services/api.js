import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos-project.herokuapp.com",
});

// export const getStatisticsByDate = async () => {
//   let data = null;
//   try {
//     await api
//       .get(`/statistics/${"users"}`, {
//         Authorization: `Basic ${localStorage.getItem("@App:token")}`,
//       })
//       .then((res) => {
//         data = res.data;
//       });
//   } catch (e) {
//     console.log(e);
//   }
//   return data;
// };

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
