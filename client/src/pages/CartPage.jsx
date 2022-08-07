import React from "react";
import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";

export default function CartPage() {
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
          <div className="cart__container-products-img">Img</div>
          <div className="cart__container-products-title">Title</div>
          <div className="cart__container-products-price">Цена</div>
          <div className="cart__container-products-count">
            {/* вот это сделать компонентом мб, т.к. он есть и на карточке продукта */}
            <div className="count-count">
              <div className="count-control">
                <button type="button" className="count-down">
                  -
                </button>
              </div>

              <div className="count-box">
                <input
                  type="number"
                  className="count-input"
                  min="1"
                  max="5000"
                  // value="1"
                ></input>
              </div>

              <div className="count-control">
                <button type="button" className="count-up">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="cart__container-products-sum">Итого</div>
          <div className="cart__container-products-delete">
            <button type="button">Del</button>
          </div>
        </section>
        {/* низ корзины с суммой  */}
        <div className="cart__container-footer">
          {/* <div className="clear"></div>
          <div className="clear"></div> */}

          <div className="cart__footer-count">Итого:</div>
          <div className="cart__footer-sum">123 500 руб</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
