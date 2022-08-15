import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { MAIN_PATH } from "../consts";
import { publicRoutes, authRoutes } from "../routes";

const AppRouter = () => {
  const { authUser } = useSelector((state) => state.authReducer);

  //TODO проверять авторизацию и права администратора при подгрузке маршрутов
  let routes = [...publicRoutes]
  if (authUser) {
    routes.push(...authRoutes);
  }

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
