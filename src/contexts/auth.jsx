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
        localStorage.setItem("@Tribos:user", JSON.stringify(res.data.user));
        localStorage.setItem("@Tribos:token", res.data.token);
        data = res.data;
      });

    return data;
  };

    useEffect(() => {
      const storagedUser = localStorage.getItem("@Tribos:user");
      const storagedToken = localStorage.getItem("@Tribos:token");
      let data = localStorage.getItem("@Tribos:dashboardData");
      if (!data || data[0] === ",") {
        localStorage.setItem("@Tribos:dashboardData", [0, 0, 0, 0, 0, 0]);
      }

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
