import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/product.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Way from "../components/Way";
import { getProductAction } from "../reducers/productReducer";
import { addItemAction } from "../reducers/cartReducer";
import { BASE_URL } from "../consts";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    dispatch(getProductAction(id));
  }, []);
  useEffect(() => {
    if (product) {
      setQuantity(product.items_per_pack);
    }
  }, [product]);

  function decrementQuantity() {
    const newQuantity = quantity - product.items_per_pack;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
  }

  function incrementQuantity() {
    setQuantity(quantity + product.items_per_pack);
  }

  return (
    <div>
      <Header />
      <Way />
      <main>
        {product && (
          <div className="product-wrap">
            <div className="product-img">
              <img src={BASE_URL + product.image} />
            </div>
            <div className="product-about__wrap">
              <div className="product-about__title">
                {product.type} {product.size}
              </div>
              <div className="product-about__text">
                <p>{product.subtype}</p>
              </div>
              <div className="product__price-buy">
                <div className="product__price">
                  <p>{product.price.toFixed(2)} р/шт</p>
                </div>
                <div className="product__amount">
                  <button
                    className="amount__change"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input
                    className="amount__cur"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Number(event.target.value))
                    }
                  ></input>
                  <button
                    className="amount__change"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="add-to-cart"
                    onClick={() => dispatch(addItemAction(product, quantity))}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
