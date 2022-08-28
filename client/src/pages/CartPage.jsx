import React from "react";
import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";
import CartItemList from "../components/CartItemList";

export default function CartPage() {

  return (
    <div>
      <Header />
      <Way />
      <main>
        <CartItemList />
        <div className="cart__sent">
          <form>
            <button>Отправить заявку</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
