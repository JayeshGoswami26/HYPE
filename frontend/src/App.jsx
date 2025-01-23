import Navbar from "./components/Navbar";
import "./app.css";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const [showLoader, setShowLoader] = useState(true);
  const { theme } = useThemeStore();


  useEffect(() => {
    checkAuth();
    
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [checkAuth]);

  if ((isCheckingAuth || showLoader) && !authUser)
    return (
      <div data-theme={theme} className="bg-primary/80 flex items-center justify-center h-screen gap-5 flex-col">
        <Loader className="" />
        <div className="LoaderCard">
          <div className="LoaderText">
            <p className="text-primary-content">Loading</p>
            <div className="LoaderWords">
              <span className="LoaderWord text-accent">Chats</span>
              <span className="LoaderWord text-accent">Photos</span>
              <span className="LoaderWord text-accent">Messages</span>
              <span className="LoaderWord text-accent">Friends</span>
              <span className="LoaderWord text-accent">Groups</span>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  );
};
export default App;
