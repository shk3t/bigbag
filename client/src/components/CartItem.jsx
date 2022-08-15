import React from "react";
import { useDispatch } from "react-redux";
import { removeItemAction, setQuantityAction } from "../reducers/cartReducer";

// FIX айтемы ререндерятся вместе
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cart__container-products-img">
        <img src={item.image}></img>
      </div>
      <div className="cart__container-products-title">{item.name}</div>
      <div className="cart__container-products-price">
        {item.price.toFixed(2)}
      </div>
      <div className="cart__container-products-count">
        {/* вот это сделать компонентом мб, т.к. он есть и на карточке продукта */}
        <div className="count-count">
          <div className="count-control">
            <button
              type="button"
              className="count-down"
              onClick={() =>
                dispatch(setQuantityAction(item.id, item.quantity - item.step))
              }
            >
              -
            </button>
          </div>

          <div className="count-box">
            <input
              className="count-input"
              value={item.quantity}
              onChange={(event) =>
                dispatch(setQuantityAction(item.id, Number(event.target.value)))
              }
            ></input>
          </div>

          <div className="count-control">
            <button
              type="button"
              className="count-up"
              onClick={() =>
                dispatch(setQuantityAction(item.id, item.quantity + item.step))
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="cart__container-products-sum">
        Итого: {(item.price * item.quantity).toFixed(2)} руб
      </div>
      <div className="cart__container-products-delete">
        <button
          type="button"
          onClick={() => dispatch(removeItemAction(item.id))}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
