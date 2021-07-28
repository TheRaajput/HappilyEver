import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("isLoggedIn");
    if (storedUserInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  // LOGIN Handler

  const loginHandler = (email, password) => {
    // We should of course check email and password
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  // LOGOUT Handler

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div style={{ height: "100vh" }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </div>
  );
};

export default App;
