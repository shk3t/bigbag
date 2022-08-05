import React from "react";
import avgLogo from "../assets/avg_logo.png";
import cartLogo from "../assets/icon-trolley-cart-3683279.png";
import { Link } from "react-router-dom";
import { ABOUT_PATH, CATALOG_PATH, DELIVERY_PATH, MAIN_PATH } from "../routes";
import BtnLoginLogout from "./UI/Buttons/BtnLoginLogout";
import HelloUser from "./UI/HelloUser";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <Link to={MAIN_PATH}>
          <img src={avgLogo} alt="AvegaBag лого" />
        </Link>
      </div>
      <div className="header__nav">
        <nav>
          <ul className="header__nav__ul">
            <li className="header__nav-li">
              <Link to={ABOUT_PATH}>О нас</Link>
            </li>
            <li className="header__nav-li">
              <Link to={CATALOG_PATH}>Каталог</Link>
            </li>
            {/* <li>Прайс-лист</li> */}
            <li className="header__nav-li">
              <Link to={DELIVERY_PATH}>Доставка</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__cart-login">
        <HelloUser />
        <div className="header__shopping-cart">
          <img className="shopping-cart" src={cartLogo} alt="Корзина" />
        </div>
        <div>
          <BtnLoginLogout />
        </div>
      </div>
    </header>
  );
}
