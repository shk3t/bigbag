import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { removeItemAction, setQuantityAction } from "../reducers/cartReducer";
import { BASE_URL, CATALOG_PATH } from "../consts";
import del_icon from "../assets/del_icon.png";
import { getPrice } from "../utils/repr";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={CATALOG_PATH + "/" + item.id}>
        <div className="cart__container-products-img">
          <img src={BASE_URL + item.image}></img>
        </div>
      </Link>
      <div className="cart__container-products-title">{item.name}</div>
      <div className="cart__container-products-price">{getPrice(item)}</div>
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
        {item.price ? (item.price * item.quantity).toFixed(2) + "руб" : "-"}
      </div>
      <div className="cart__container-products-delete">
        <button
          type="button"
          onClick={() => dispatch(removeItemAction(item.id))}
        >
          <img className="del_icon" src={del_icon} alt="Удалить" />
        </button>
      </div>
    </div>
  );
}

function areEqual(prev, next) {
  return prev.item.quantity === next.item.quantity;
}

export default memo(CartItem, areEqual);
