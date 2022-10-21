import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes";

import "./App.css";
import AuthProvider from "./contexts/auth";
import ChangePriceProvider from "./contexts/changePrice";

function App() {
  return (
    <AuthProvider>
      <ChangePriceProvider>
        <Router>
          <MainRoutes />
        </Router>
      </ChangePriceProvider>
    </AuthProvider>
  );
}

export default App;
