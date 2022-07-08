import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos-project.herokuapp.com",
});

// export const getStatisticsByDate = async (type, date) => {
//   const targetDate = new Date(date);
//   const today = new Date();

//   try {
//     const response = await api.get(
//       `/statistics/${type}/${targetDate.getFullYear()}-${targetDate.getMonth()}/${today.getFullYear()}-${today.getMonth()}`,
//       {
//         Authorization: `Basic ${localStorage.getItem("@App:token")}`,
//       }
//     );
//     console.log(response.data);
//   } catch (e) {
//     console.log(e);
//   }
// };
