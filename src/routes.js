import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Login from "./pages/login";
import Feedback from "./pages/feedback";
import Errors from "./pages/errors";
import Spam from "./pages/spam";

export default function MainRoutes() {
  const isLogged = true;
  return (
    <Routes>
      <Route path="/" element={isLogged ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detalhes" element={<Details />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/errors" element={<Errors />} />
      <Route path="/spam" element={<Spam />} />
    </Routes>
  );
}
