import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Login from "./pages/login";
import Spam from "./pages/spam";
import { PaymentTable } from "./pages/paymentTable";
import { PaymentDashboard } from "./pages/paymentDashboard";
import { useAuth } from "./contexts/auth";
// import { NotAuthorized } from "./pages/notAuthorized";
import { NotFound } from "./pages/notFound";

export default function MainRoutes() {
  const { signed } = useAuth();
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={signed ? <Dashboard /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/spam" element={<Spam />} />
      <Route path="/details/:type/:interval" element={<Details />} />
      <Route path="/payment/table" element={<PaymentTable />} />
      <Route path="/payment" element={<PaymentDashboard />} />
    </Routes>
  );
}
