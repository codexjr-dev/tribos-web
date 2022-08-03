import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos-project.herokuapp.com",
});

api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "@Tribos:token"
)}`;

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
    .catch((data = null));
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
    .post("/report/post", {
      idReported: id,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const removePost = async (id) => {
  await api
    .delete("/report/post", {
      data: { idReport: id },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const reportUser = async (id) => {
  await api
    .post("/report/user", {
      idReported: id,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const removeUser = async (id) => {
  await api
    .delete("/report/user", {
      data: { idReport: id },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const reportTribo = async (id) => {
  await api
    .post("/report/tribo", {
      idReported: id,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const removeTribo = async (id) => {
  await api
    .delete("/report/tribo", {
      data: { idReport: id },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

export const ignoreReport = async (id) => {
  await api
    .delete("/report/ignore", {
      data: { idReport: id },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
