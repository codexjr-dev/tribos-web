import axios from "axios";

export const api = axios.create({
  baseURL: "https://tribos-project.herokuapp.com",
});

export const authenticate = async (username, password) => {
  try {
    const response = await api.post("/sign-in/web", {
      username: username,
      password: password,
    });
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    localStorage.setItem("@App:token", response.data.token);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
