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

 // export const findAllReports = async () => {
 //  let data = null
 //  await api.get("/report", {
  //   Authorization: `${localStorage.getItem("@App:token")}`,
 //  }).then((res) => {
 //    data = res.data;
 //    console.log(res.data.token)
 //  }).catch(e => console.log(e));

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

export const getAllReportsByCount = async () => {
  let dataByCount = null;
  await api
    .get("/report/count")
    .then((resp) => {
      dataByCount = resp.dataByCount;
    })
    .catch((ex) => {
      dataByCount = null;
    });
  return dataByCount;
};


