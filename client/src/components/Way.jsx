import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { MAIN_PATH } from "../consts";
import { useNavigate } from "react-router";

export default function Way({ tail = null }) {
  const { pathname } = useLocation();

  // const navigate = useNavigate();
  // const goBack = navigate(-1);
  // const goHome = <Navigate to={MAIN_PATH} />;
  // console.log(goHome);

  function getCurrentPathname(path) {
    switch (path) {
      case "/about":
        return "О нас";

      case "/cart":
        return "Корзина";

      case "/catalog":
        return "Каталог";

      case "/delivery":
        return "Доставка";

      case "/products":
        return "Все мешки";

      case "/admin":
        return "Админка";

      default:
        if (path.includes("/products/")) return "Все мешки";
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
      <Link to={pathname}>
        <span className={tail || "way__currentPath"}>
          {getCurrentPathname(pathname)}&ensp;
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
  //           {getCurrentPathname(pathname)}&ensp;
  //         </span>
  //       </Link>
  //       {tail && <span> {">"}&ensp; </span>}
  //       {tail && <span className="way__currentPath">{tail}</span>}
  //     </section>
  //   );
}
