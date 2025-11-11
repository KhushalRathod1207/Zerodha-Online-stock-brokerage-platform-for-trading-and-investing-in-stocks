import React, { useContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/Home";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Pricing from "./Pages/Pricing";
import Support from "./Pages/Support";

// Dashboard pages
import Dashboard from "./Pages/Dashboard";
import Home from "./Dashboard/components/Home";
import Funds from "./Dashboard/components/Funds";
import Orders from "./Dashboard/components/Orders";
import Market from "./Dashboard/components/Market";
import Apps from "./Dashboard/components/Apps";
import Profile from "./Dashboard/components/Profile"
import Positions from "./Dashboard/components/Positions";
import Holdings from "./Dashboard/components/Holdings";
import Summary from "./Dashboard/components/Summary";
import { VerticalGraph } from "./Dashboard/components/VerticalGraph";
import BuyActionWindow from "./Dashboard/components/BuyActionWindow";
import SellActionWindow from "./Dashboard/components/SellActionWindow";

// Auth & ProtectedRoute
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Watchlist from "./Dashboard/components/WatchList";

function App() {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

        {/* Protected Dashboard with nested routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard />
            </ProtectedRoute>
          }
        >

          {/* Nested routes */}
          <Route index path="home" element={<Home />} />
          <Route path="funds" element={<Funds />} />
          <Route path="market" element={<Market />} />
          <Route path="orders" element={<Orders />} />
          <Route path="positions" element={<Positions />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="apps" element={<Apps />} />
          <Route path="summary" element={<Summary />} />
          <Route path="profile" element={<Profile />} />
          <Route path="graph" element={<VerticalGraph />} />
          <Route path="buy/:uid" element={<BuyActionWindow />} />
          <Route path="sell/:uid" element={<SellActionWindow />} />

          {/* Redirect unknown dashboard routes */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        {/* Redirect unknown public routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
