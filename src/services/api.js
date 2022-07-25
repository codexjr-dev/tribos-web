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
        "idReported": "62dd532dbc5ea46068c1763b"
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
        "idReport": "62dd50a6bc5ea46068c1758f"
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
        "idReported": "626324ebba865e7e12cab126"
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
       "idReport": "62cc6815c54ae99554cd2e5b"
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
        "idReported": "62cc6829c54ae99554cd2e61"
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
        "idReport": "62295255cd7d3237ba7bb8f8"
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
        data: {"idReport": "62cc6829c54ae99554cd2e61"}
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




