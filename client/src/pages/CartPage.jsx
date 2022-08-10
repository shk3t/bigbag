import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <div>
      <Header />
      <Way />
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
          {Object.entries(cartItems).map(([id, item]) => (
            <CartItem key={id} item={item} />
          ))}
        </section>
        {/* низ корзины с суммой  */}
        <div className="cart__container-footer">
          {/* <div className="clear"></div>
          <div className="clear"></div> */}

          <div className="cart__footer-count">Итого:</div>
          <div className="cart__footer-sum">
            {Object.values(cartItems).reduce(
              (left, right) =>
                left.quantity * left.price + right.quantity * right.price
            )}{" "}
            руб
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
