import axios from "axios";
import { differenceInDays } from "date-fns";

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

export const findAllAnnouncements = async () => {
  const cacique = await findAllCacique();
  const feed = await findAllFeed();
  const master = await findAllMaster();
  
  return {
    1: cacique,
    2: feed,
    3: master
  }
};

const findAll = async () => {
  let result = []
  const all = await findAllAnnouncements();
  // console.log(all[1])

  result.concat(all[1], all[2], all[3])
  console.log(result)

} 


export const findAllCacique = async () => {
  let data;
  await api
    .get("/adm/announcement/cacique")
    .then((res) => {
      data = res.data.announcements;
    })
    .catch(() => {
      data = null;
    });

  return data;
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

export const findAmountByTypeAndInterval = async (type, interval) => {
  let amountInfo = [];

  // switch (type) {
  //   case 0:
  //     amountInfo = await findAllFeed();
  //     break;
  //   case 1:
  //     amountInfo = await findAllCacique();
  //     break;
  //   case 2:
  //     amountInfo = await findAllMaster();
  //     break;
  //   default:
  //     break;
  // }

  // differenceInDays()
  // console.log(amountInfo);

  // findAllAnnouncements()
  await findAll();
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

export const reportPost = async (id) => {
  await api
    .post("/report/post", {
      idReported: id,
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
