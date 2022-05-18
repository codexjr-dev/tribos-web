import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Login from "./pages/login";

export default function MainRoutes() {
  const isLogged = true;
  return (
    <Routes>
      <Route path="/" element={isLogged ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detalhes" element={<Details />} />
    </Routes>
  );
}
