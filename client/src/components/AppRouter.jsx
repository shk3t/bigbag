import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { MAIN_PATH } from "../consts";
import { parseToken } from "../utils/tokens";
import { publicRoutes, authRoutes, adminRoutes } from "../routes";

const AppRouter = () => {
  const authUser = useSelector((state) => state.authReducer.authUser);
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const [routes, setRoutes] = useState(publicRoutes);

  useMemo(() => {
    if (authUser) {
      routes.push(...authRoutes);
      const token = parseToken(accessToken);
      if (token.is_admin) {
        routes.push(...adminRoutes);
      }
      setRoutes([...routes]);
    }
  }, [authUser]);

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
