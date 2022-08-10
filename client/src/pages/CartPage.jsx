import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Way from "../components/Way";
import Footer from "../components/Footer";
import { removeItemAction, setQuantityAction } from "../reducers/cartReducer";

export default function CartPage() {
  const dispatch = useDispatch();
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
            <div key={id}>
              <div className="cart__container-products-img">
                <img src={item.image}></img>
              </div>
              <div className="cart__container-products-title">{item.name}</div>
              <div className="cart__container-products-price">{item.price}</div>
              <div className="cart__container-products-count">
                {/* вот это сделать компонентом мб, т.к. он есть и на карточке продукта */}
                <div className="count-count">
                  <div className="count-control">
                    <button
                      type="button"
                      className="count-down"
                      onClick={() => dispatch(setQuantityAction(id, item.quantity - item.step))}
                    >
                      -
                    </button>
                  </div>

                  <div className="count-box">
                    <input
                      className="count-input"
                      value={item.quantity}
                      // TODO редакс не работает, лень думать почему ^v^
                      onChange={() => dispatch(setQuantityAction(id, item.quantity))}
                    ></input>
                  </div>

                  <div className="count-control">
                    <button
                      type="button"
                      className="count-up"
                      onClick={() => dispatch(setQuantityAction(id, item.quantity + item.step))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart__container-products-sum">Итого</div>
              <div className="cart__container-products-delete">
                <button
                  type="button"
                  onClick={() => dispatch(removeItemAction(id))}
                >
                  Del
                </button>
              </div>
            </div>
          ))}
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
