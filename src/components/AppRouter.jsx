import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/index";
import Loader from "./UI/Loader/Loader";
import { AuthContext } from "../context";
import Error from "../pages/Error";


const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth, isLoading);

  if (isLoading) {
      return <Loader />;
  }

  return (
      <Routes>
          {/* Public routes accessible to all */}
          {publicRoutes.map(route => (
              <Route
                  element={route.element}
                  path={route.path}
                  key={route.path}
              />
          ))}

          {/* Private routes */}
          {isAuth ? (
              <>
                  {privateRoutes.map(route => (
                      <Route
                          element={route.element}
                          path={route.path}
                          key={route.path}
                      />
                  ))}
                  {/* Catch-all route for authenticated users */}
                  <Route path="*" element={<Error />} />
              </>
          ) : (
              <>
                  {/* Redirect unauthenticated users to login, except for error page */}
                  <Route path="/error" element={<Error />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
              </>
          )}
      </Routes>
  );
};

export default AppRouter;
