import React from "react"
import avgLogo from "../assets/avg_logo.png"
import cartLogo from "../assets/icon-trolley-cart-3683279.png"

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={avgLogo} alt="AvegaBag лого" />
      </div>
      <div className="header__nav">
        <nav>
          <ul className="header__nav__ul">
            <li>О нас</li>
            <li>Каталог</li>
            <li>Прайс-лист</li>
            <li>Доставка</li>
          </ul>
        </nav>
      </div>
      <div className="header__shopping-cart">
        <img className="shopping-cart" src={cartLogo} alt="Корзина" />
      </div>
    </header>
  )
}
