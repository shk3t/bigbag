import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/product.css";
import Footer from "../components/Footer";
import Way from "../components/Way";
import { getProductAction } from "../reducers/productReducer";
import { addItemAction } from "../reducers/cartReducer";
import { BASE_URL, POLY_BAG } from "../consts";
import { getPrice } from "../utils/repr";
import { delay } from "../utils/delay";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);
  const [quantity, setQuantity] = useState(0);
  const initialButtonLabel = "Добавить в корзину";
  const [buttonLabel, setButtonLabel] = useState(initialButtonLabel);

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
      <div className="wrapper-for-footer">
        <Way tail={product.type + " " + product.size} />
        <main>
          {product && (
            <div className="product-wrap">
              <div className="product-img">
                <img src={BASE_URL + product.image} alt="продукт" />
              </div>
              <div className="product-about__wrap">
                <div className="product-about__title">
                  {product.type} {product.size}
                </div>
                {/* при добавлении новой категории, напр., перчаток, переписать */}
                <div className="product-about__text">
                  <p>
                    <span className="product-about__category"> Тип:&nbsp;</span>
                    {product.subtype}
                  </p>
                  <p>
                    <span className="product-about__category">
                      Размер:&nbsp;
                    </span>
                    {product.size}
                  </p>
                  <p>
                    <span className="product-about__category">Вес:&nbsp;</span>
                    {product.bag_weight}
                    {product.type === POLY_BAG ? "гр/шт" : "кг/шт"}
                  </p>
                  <p>
                    <span className="product-about__category">
                      Кол-во в упаковке:&nbsp;
                    </span>
                    {product.items_per_pack}
                  </p>

                  {product.type === POLY_BAG ? (
                    <p>
                      <span className="product-about__category">
                        Цвет:&nbsp;
                      </span>
                      {product.color}
                    </p>
                  ) : (
                    <p>
                      <span className="product-about__category">
                        {product.bottom_modification ? "Верх:" : "Сорт:"}&nbsp;
                      </span>
                      {product.top_modification}
                    </p>
                  )}
                  {product.type === POLY_BAG ? (
                    <p>
                      <span className="product-about__category">
                        Сорт:&nbsp;
                      </span>
                      {product.poly_grade}
                    </p>
                  ) : (
                    product.bottom_modification && (
                      <p>
                        <span className="product-about__category">
                          Низ:&nbsp;
                        </span>
                        {product.bottom_modification}
                      </p>
                    )
                  )}
                </div>
                <div className="product__price-buy">
                  <div className="product__price">
                    <span>
                      {!product.price_on_request && "От "}
                      {getPrice(product)}
                    </span>
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
                      value={quantity || 0}
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
                      onClick={async () => {
                        dispatch(addItemAction(product, quantity));
                        setButtonLabel("Добавлено!");
                        await delay(1000);
                        setButtonLabel(initialButtonLabel);
                      }}
                    >
                      {buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
