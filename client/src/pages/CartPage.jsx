import React from "react";
import Way from "../components/Way";
import Footer from "../components/Footer";
import CartItemList from "../components/CartItemList";
import { CART_REQUEST } from "../consts";
import { setModalAction } from "../reducers/modalRequestReducer";
import { useDispatch } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Way />
      <main>
        <CartItemList />
        <div className="cart__sent">
          <button onClick={() => dispatch(setModalAction(CART_REQUEST, true))}>
            Отправить заявку
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
