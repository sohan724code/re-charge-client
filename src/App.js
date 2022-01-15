import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Support from "./Components/Support/Support";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Contexts/AuthProvider";
import OfferModal from "./Components/Home/OfferModal/OfferModal";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Offer from "./Components/Home/Offer/Offer";
import PayWith from "./Components/Shared/PayWith/PayWith";
import Footer from "./Components/Shared/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <PayWith />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
