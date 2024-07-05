import React, { useState, useMemo, useEffect } from 'react';
import { AuthContext } from './context';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const authContextValue = useMemo(() => ({
    isAuth,
    setIsAuth,
    isLoading,
    setIsLoading
  }), [isAuth, isLoading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      <BrowserRouter>
        <Navbar /> 
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
