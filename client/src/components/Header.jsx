import React from "react";
import avgLogo from "../assets/avg_logo.png";
import cartLogo from "../assets/icon-trolley-cart-3683279.png";
import { Link } from "react-router-dom";
import { ABOUT_PATH, CATALOG_PATH, DELIVERY_PATH } from "../routes";

// Заменил хардкод линки на константы, то же самое сделал и в Footer.jsx (Удалить После Прочтения)
export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={avgLogo} alt="AvegaBag лого" />
      </div>
      <div className="header__nav">
        <nav>
          <ul className="header__nav__ul">
            <Link to={ABOUT_PATH}>О нас</Link>
            <Link to={CATALOG_PATH}>Каталог</Link>
            {/* <li>Прайс-лист</li> */}
            <Link to={DELIVERY_PATH}>Доставка</Link>
          </ul>
        </nav>
      </div>
      <div className="header__shopping-cart">
        <img className="shopping-cart" src={cartLogo} alt="Корзина" />
      </div>
    </header>
  );
}
