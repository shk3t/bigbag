import React from "react";
import { useLocation } from "react-router-dom";

export default function Way() {
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
        return "Главная";
    }
  }

  return (
    <section className="way">
      <span>Главная {">"} </span>
      <span className="way__currentPath"> {getCurrentPathname(pathname)}</span>
    </section>
  );
}
