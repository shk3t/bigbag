import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartItemList() {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  function getTotalPrice() {
    let totalPrice = 0.0;
    for (const item of Object.values(cartItems)) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice.toFixed(2);
  }

  return (
    <section className="cart__container">
      {/* заголовки столбцов */}
      <div className="cart__container-title">
        <div>Товар</div>
        <div>Цена</div>
        <div className="title-count">Количество</div>
        <div>Итого</div>
        <div>Удалить</div>
      </div>
      {/* сама корзина */}
      <section className="cart__container-products">
        {/* вот здесь сейчас просто отрисовывается единый div, состоящий из других дивов. */}
        {Object.entries(cartItems).map(([id, item]) => (
          <CartItem key={id} item={item} />
        ))}
      </section>
      {/* низ корзины с суммой  */}
      <div className="cart__container-footer">
        {/* <div className="clear"></div>
          <div className="clear"></div> */}

        <div className="cart__footer-count">Итого:</div>
        <div className="cart__footer-sum">{getTotalPrice()} руб</div>
      </div>
    </section>
  );
}
