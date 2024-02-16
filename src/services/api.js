import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos.herokuapp.com",
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

export const findAllCacique = async () => {
  try {
    const res = await api.get("/adm/announcement/cacique");
    return res.data.announcements;
  } catch (error) {
    return null;
  }
};

export const globalMessage = async (message) => {
  await api.post("/personal/global", {
    message
  });
};

export const findAllMaster = async () => {
  let data;
  await api
    .get("/adm/announcement/master")
    .then((res) => {
      data = res.data.announcements;
    })
    .catch(() => {
      data = null;
    });

  return data;
};

export const findAllFeed = async () => {
  let data;
  await api
    .get("/adm/announcement/feed")
    .then((res) => {
      data = res.data.announcements;
    })
    .catch(() => {
      data = null;
    });

  return data;
};

export const findTriboById = async (id) => {
  let data;
  await api
    .get(`/tribo/${id}`)
    .then((res) => {
      data = res.data;
    })
    .catch(() => {
      data = null;
    });

  return data;
};

export const payCacique = async (announcementId, value) => {
  await api.put(`/adm/announcement/${announcementId}`, {
    amountPaid: value,
  });
};

export const updateCaciquePayment = async (announcementId) => {
  await api.put(`/adm/announcement/caciquePayment/${announcementId}`);
};

export const findAnnouncementDetails = async (announcementId) => {
  let data;
  await api.get(`/announcement/${announcementId}`).then((res) => {
    data = res.data;
  });

  return data;
};

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
export const getPriceTable = async () => {
  let data = {};
  await api.get("/prices").then((res) => {
    data = res.data;
  });
  return data;
};

export const updatePrices = async (newPrices) => {
  await api.put("/prices", newPrices);
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

export const getCountByMonth = async (type) => {
  let data;
  await api
    .get(`/statistics/details/${type}`)
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
    .then((res) => {
      dataByCount = res.data;
    })
    .catch((ex) => {
      dataByCount = null;
    });
  return dataByCount;
};

export const reportPost = async (id, reasonIndex, res) => {
  await api
    .post("/report/post", {
      idReported: id,
      reasonIndex: reasonIndex,
    })
    .then((res) => {
      console.log(res);
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
    .then((res) => {
      console.log(res);
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
    .then((res) => {
      console.log(res);
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

export const removeAnnouncement = async (id) => {
  await api
    .delete("/report/announcement", {
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

export const getGeneralFinances = async () => {
  let data = null;
  await api
    .get("/statistics/generalFinances/")
    .then((res) => {
      data = res.data;
    })
    .catch((ex) => {
      data = null;
    });
  return data;
};

export const getGeneralFinancesByDate = async (datas) => {
  let data = null;
  await api
    .get("/statistics/generalFinancesByDate/", {
      params: {
        startDate: datas[0],
        endDate: datas[1],
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((ex) => {
      data = null;
    });
  return data;
};

export const privatePosts = async (TriboId) => {
  try {
    const res = await api.get(`private/posts?triboId=${TriboId}`);
    return res.data.posts;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTriboById = async (id) => {
  try {
    const res = await api.get(`/tribo/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPrivateTribos = async () => {
  try {
    const res = await api.get("/private/tribos");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const findPostComments = async (idPost) => {
  try {
    const res = await api.get(`/comment/post/${idPost}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const chargePayment = async (ann) => {
  try{
    const res  = await api.post(`/annoucement/chargePayment`, {
      announcement: ann
    })
    return res.data
  }catch (e) {
    return null;
  }
}

export const getAllUsers = async () => {
   try {
    const response = await api.get("/personal")

    return response;
   } catch (error) {
      return null;
   }
}

export const AdmNotifyUser = async (idUser, message) => {

  try {
    const response = await api
                        .post(`/personal/notifications/AdmNotification/${idUser}`,
                             {message})
  } catch (error) {
    return null
  }
}

export const BanUser = async (idUser) => {
  try {
    const response = await api.post(`/personal/banUser/${idUser}`)
  } catch (error) {
    return null
  }
}
