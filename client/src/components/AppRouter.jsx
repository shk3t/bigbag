import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthService from "../API/AuthService";
import { MAIN_PATH } from "../consts";
import {
  publicRoutes,
  authRoutes,
  adminRoutes,
  managerRoutes,
} from "../routes";

const AppRouter = () => {
  const authUser = useSelector((state) => state.authReducer.authUser);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const [routes, setRoutes] = useState(publicRoutes);

  useEffect(() => {
    if (authUser) {
      setRoutes([...routes, ...authRoutes]);
      const token = AuthService.parseToken(accessToken);
      if (token.is_admin) {
        setRoutes([...routes, ...adminRoutes]);
      }
      if (token.is_manager) {
        setRoutes([...routes, ...managerRoutes]);
      }
    }
  }, [authUser]);

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
