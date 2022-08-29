import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartLogo from "../../assets/icon-trolley-cart-3683279.png";
import { CART_PATH } from "../../consts";

export default function CartLogo() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div className="header__shopping-cart">
      <Link to={CART_PATH}>
        {Object.keys(cartItems).length > 0 && (
          <div className="cart_is-not-empty"></div>
        )}
        <img className="shopping-cart" src={cartLogo} alt="Корзина" />
      </Link>
    </div>
  );
}
