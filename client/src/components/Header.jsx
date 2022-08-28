import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import avgLogo from "../assets/avg_logo.png";
import {
  ABOUT_PATH,
  CATALOG_PATH,
  DELIVERY_PATH,
  MAIN_PATH,
  ADMIN_PATH,
} from "../consts";
import BtnLoginLogout from "./UI/Buttons/BtnLoginLogout";
import HelloUser from "./UI/HelloUser";
import CartLogo from "./UI/CartLogo";

export default function Header() {
  const { authUser } = useSelector((state) => state.authReducer);

  return (
    <header>
      <div className="header__logo">
        <Link to={MAIN_PATH}>
          <img className="img-logo" src={avgLogo} alt="AvegaBag лого" />
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
      <Link to={ADMIN_PATH}>
        <button className="header__admin-btn">Админ панель</button>
      </Link>
      <div className="header__cart-login">
        {authUser ? <HelloUser name={authUser.name} /> : ""}
        <CartLogo />
        <div>
          <BtnLoginLogout />
        </div>
      </div>
    </header>
  );
}
