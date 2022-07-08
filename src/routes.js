import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Login from "./pages/login";
import Feedback from "./pages/feedback";
import Errors from "./pages/errors";
import Spam from "./pages/spam";
import { PaymentTable } from "./pages/paymentTable";
import { useAuth } from "./contexts/auth";

export default function MainRoutes() {
  const { signed } = useAuth();
  return (
    <Routes>
      <Route path="/" element={signed ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/detalhes" element={<Details />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/errors" element={<Errors />} />
      <Route path="/spam" element={<Spam />} />
      <Route path="/details/:type/:interval" element={<Details />} />
      <Route path="/payment/table" element={<PaymentTable />} />
    </Routes>
  );
}
