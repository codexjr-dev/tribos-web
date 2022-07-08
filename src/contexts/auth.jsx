import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  let signed = Boolean(user);

  const authenticate = async (username, password) => {
    let data = null;
    await api
      .post("/sign-in/web", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("@App:user", JSON.stringify(res.data.user));
        localStorage.setItem("@App:token", res.data.token);
        data = res.data;
      })
      .catch((e) => {
        alert("Erro!");
      });

    return data;
  };

  // const logout = async () => {
  //   try {
  //     await api
  //       .patch(`/logout/${localStorage.getItem("@App:token")}`)
  //       .then((res) => console.log(res.data));
  //     setUser(null);
  //     localStorage.removeItem("@App:user");
  //     localStorage.removeItem("@App:token");
  //     console.log("Tirei.");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, user, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { signed, user, authenticate } = context;
  return { signed, user, authenticate };
}
