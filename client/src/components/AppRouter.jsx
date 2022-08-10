import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { MAIN_PATH, publicRoutes, privateRoutes } from "../routes";

const AppRouter = () => {
  //эта константна должна быть динамической и перенесена в стэйт менеджер
  const isAuth = false;
  const routes = isAuth ? privateRoutes : publicRoutes;
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_PATH} />} />
    </Routes>
  );
};

export default AppRouter;
