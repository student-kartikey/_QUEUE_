import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";
import UserAuth from "./pages/UserAuth.jsx";
import BookQueue from "./pages/BookQueue.jsx";
import LiveQueueStatus from "./pages/LiveQueueStatus.jsx";
import StaffDashboard from "./pages/StaffDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import AdminAuth from "./pages/AdminAuth.jsx";
import About from "./pages/About.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login/:authMode" element={<UserAuth />} />
        <Route path="/book" element={<BookQueue />} />
        <Route path="/status" element={<LiveQueueStatus />} />
        <Route path="/dashboard" element={<StaffDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/:authMode" element={<AdminAuth />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
