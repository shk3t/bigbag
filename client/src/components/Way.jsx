import React from "react";
import { useLocation } from "react-router-dom";

export default function Way({ tail = null }) {
  const { pathname } = useLocation();

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
        return "Товар";

      case "/admin":
        return "Админка";

      default:
        if (path.includes("/products/")) return "Товар";
        return "Главная";
    }
  }

  return (
    <section className="way">
      <span>Главная&ensp;</span>
      <span>{">"}&ensp;</span>
      <span className={tail || "way__currentPath"}>
        {getCurrentPathname(pathname)}&ensp;
      </span>
      {tail && <span> {">"}&ensp; </span>}
      {tail && <span className="way__currentPath">{tail}</span>}
    </section>
  );
}
