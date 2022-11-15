import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainRoutes from "./routes";

import AuthProvider from "./contexts/auth";
import ChangePriceProvider from "./contexts/changePrice";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ChangePriceProvider>
        <Router>
          <ToastContainer autoClose={4000} />
          <MainRoutes />
        </Router>
      </ChangePriceProvider>
    </AuthProvider>
  );
}

export default App;
