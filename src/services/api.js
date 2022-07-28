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
      dataByCount = resp.data;
    })
    .catch((ex) => {
      dataByCount = null;
    });
  return dataByCount;
};

export const reportPost = async (id) => {
  await api
    .post("/report/post", 
    {
        "idReported": id
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const removePost = async (id) => {
  await api
    .delete("/report/post", 
    {
      data: {"idReport": id}
    })
    .then((res) => {
      console.log(res)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const reportUser = async (id) => {
  await api
    .post("/report/user", 
    {
        "idReported": id
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const removeUser = async (id) => {
  await api
    .delete("/report/user", 
    {
      data: {"idReport": id}
    })
    .then((res) => {
      console.log(res)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const reportTribo = async (id) => {
  await api
    .post("/report/tribo", 
    {
        "idReported": id
    })
    .then((resp) => {
      console.log(resp)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const removeTribo = async (id) => {
  await api
    .delete("/report/tribo", 
    {
      data: {"idReport": id}
    })
    .then((res) => {
      console.log(res)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};

export const ignoreReport = async (id) => {
  await api
    .delete("/report/ignore", 
    {
        data: {"idReport": id}
    })
    .then((res) => {
      console.log(res)
    })
    .catch((ex) => {  
      console.log(ex)
    });
};


axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});




