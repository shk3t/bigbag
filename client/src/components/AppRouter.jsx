import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { MAIN_PATH, publicRoutes, authRoutes } from "../routes";

const AppRouter = () => {
  //эта константна должна быть динамической и перенесена в стэйт менеджер
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_PATH} />} />
    </Routes>
  );
};

export default AppRouter;
