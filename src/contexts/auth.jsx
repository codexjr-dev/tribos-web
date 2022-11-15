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
        sessionStorage.setItem("@Tribos:user", JSON.stringify(res.data.user));
        sessionStorage.setItem("@Tribos:token", res.data.token);
        data = res.data;
      })
      .catch((e) => {
        alert("Erro!");
      });

    return data;
  };

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@Tribos:user");
    const storagedToken = sessionStorage.getItem("@Tribos:token");
    let data = sessionStorage.getItem("@Tribos:dashboardData");
    if (!data || data[0] === ",") {
      sessionStorage.setItem("@Tribos:dashboardData", [0, 0, 0, 0, 0, 0]);
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
