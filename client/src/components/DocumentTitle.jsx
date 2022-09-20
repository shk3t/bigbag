import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { allRoutes } from "../routes";

export default function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = allRoutes.find((route) => pathname.includes(route.path));
    document.title = route && route.title ? route.title : "BigBag.pro";
  }, [pathname]);
}
