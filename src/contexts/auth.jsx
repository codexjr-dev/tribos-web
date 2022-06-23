import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { signed, setUser, user } = context;
  return { signed, setUser, user };
}