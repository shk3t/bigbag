import React from "react";
import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";
import CartItemList from "../components/CartItemList";
import BtnCartRequest from "../components/UI/Buttons/BtnCartRequest";

export default function CartPage() {

  return (
    <div>
      <Way />
      <main>
        <CartItemList />
        <BtnCartRequest />
      </main>
      <Footer />
    </div>
  );
}
