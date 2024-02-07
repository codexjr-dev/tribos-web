import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Login from "./pages/login";
import Spam from "./pages/spam";
import { PaymentTable } from "./pages/paymentTable";
import { PaymentDashboard } from "./pages/paymentDashboard";
import { NotFound } from "./pages/notFound";
import { TribosHome } from "./pages/tribosHome";
import { TribosProfile } from "./pages/tribosProfile";
import { TribosBusca } from "./pages/tribosBusca";
import { TribosPost } from "./pages/tribosPost";
import { ChangePassword } from "./pages/ChangePassword";
import ManageUsers from "./pages/manageUsers";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/dashboard/:interval" element={<Dashboard />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/details/:type/:interval" element={<Details />} />
        <Route path="/payment/table" element={<PaymentTable />} />
        <Route path="/payment" element={<PaymentDashboard />} />
        <Route path="/tribos" element={<TribosHome />} />
        <Route path="/tribos/Profile/:triboId" element={<TribosProfile />} />
        <Route path="/tribos/Busca" element={<TribosBusca />} />
        <Route path="/tribos/Post/:triboId/:postId" element={<TribosPost />} />
        <Route path="/tribos/Change" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
}
