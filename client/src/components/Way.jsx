import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ABOUT_PATH,
  ADMIN_PATH,
  CART_PATH,
  CATALOG_PATH,
  DELIVERY_PATH,
  MAIN_PATH,
} from "../consts";

export default function Way({ tail = null }) {
  const { pathname } = useLocation();

  // const navigate = useNavigate();
  // const goBack = navigate(-1);
  // const goHome = <Navigate to={MAIN_PATH} />;
  // console.log(goHome);

  function toWaySegment(path) {
    switch (path) {
      case ABOUT_PATH:
        return "О нас";
      case CART_PATH:
        return "Корзина";
      case CATALOG_PATH:
        return "Каталог";
      case DELIVERY_PATH:
        return "Доставка";
      case ADMIN_PATH:
        return "Админка";
      default:
        if (path.includes(CATALOG_PATH + "/")) return "Каталог";
        return "Главная";
    }
  }
  // РАБОТАЮЩАЯ ВЕРСИЯ БЕЗ ВОЗВРАТА НАЗАД
  return (
    <section className="way">
      <Link to={MAIN_PATH}>
        <span>Главная&ensp;</span>
      </Link>
      <span>{">"}&ensp;</span>
      {/* Захардкодил, пофикшу в следующей жизни :3 */}
      <Link to={pathname.includes(CATALOG_PATH) ? CATALOG_PATH : pathname}>
        <span className={tail || "way__currentPath"}>
          {toWaySegment(pathname)}&ensp;
        </span>
      </Link>
      {tail && <span> {">"}&ensp; </span>}
      {tail && <span className="way__currentPath">{tail}</span>}
    </section>
  );

  // ///////////////////// ЭКСПЕРИМЕНТАЛЬНАЯ ВЕРСИЯ
  //   return (
  //     <section className="way">
  //       {goHome}
  //       <span>Главная&ensp;</span>
  //       <span>{">"}&ensp;</span>
  //       <Link to={pathname}>
  //         <span className={tail || "way__currentPath"}>
  //           {toWayItem(pathname)}&ensp;
  //         </span>
  //       </Link>
  //       {tail && <span> {">"}&ensp; </span>}
  //       {tail && <span className="way__currentPath">{tail}</span>}
  //     </section>
  //   );
}
