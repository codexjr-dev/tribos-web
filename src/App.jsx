import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes";

import "./App.css";
import AuthProvider from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
