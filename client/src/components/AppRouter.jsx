import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { MAIN_PATH, publicRoutes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_PATH} />} />
    </Routes>
  );
};

export default AppRouter;
