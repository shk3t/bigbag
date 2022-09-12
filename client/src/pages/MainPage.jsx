import React from "react";
import { Link } from "react-router-dom";
import { BIG_BAG, CALL_REQUEST, CATALOG_PATH, POLY_BAG } from "../consts";
import Footer from "../components/Footer";
import benefit from "../assets/benefit.png";
import novopack from "../assets/novopack.png";
import exampleBug from "../assets/example-bug.png";
import bigbag from "../assets/bigbag.webp";

import mainImg from "../assets/main.jpg";

import { useDispatch } from "react-redux";
import { setModalAction } from "../reducers/modalRequestReducer";

export default function MainPage() {
  const dispatch = useDispatch();

  const catalogCategories = [
    { label: "МЕШКИ", image: exampleBug, path: CATALOG_PATH + "?" + POLY_BAG },
    { label: "БИГ-БЭГИ", image: bigbag, path: CATALOG_PATH + "?" + BIG_BAG },
  ];

  return (
    <div className="root-div">
      <div className="container">
        <main>
          <section className="slider">
            <div className="slider-text">
              <h1>«Дебют» — промышленная упаковка для вашего бизнеса</h1>
              <p>
                Мы продаём качественную промышленную полимерную упаковку —
                строительные, бытовые, пищевые мешки, а также мягкие контейнеры
                (биг-бэги). Доставка по России и странам СНГ
              </p>

              <button
                className="btn__action"
                onClick={() => dispatch(setModalAction(CALL_REQUEST, true))}
              >
                Заказать звонок
              </button>
            </div>
            <div className="slider-img">
              <img src={mainImg} alt="Биг-бэг в производстве" />
            </div>
          </section>
          <div className="our-benefits__title">
            <h3>Наши преимущества</h3>
          </div>
          <section className="our-benefits">
            <div className="our-benefits__item">
              <img src={benefit} alt="преимущество" />
              <h4> Качественные материалы</h4>
              <p>
                Наши мешки изготовлены из прочного полипропилена, устойчивого к
                внешним воздействиям. На материал легко наносить логотипы и
                метки
              </p>
            </div>
            <div className="our-benefits__item">
              <img src={benefit} alt="преимущество" />

              <h4>Удобная доставка</h4>
              <p>
                Привезём ваш заказ по Москве и Московской области на выгодных
                условиях. Доставим по России и странам СНГ по договорённости
              </p>
            </div>
            <div className="our-benefits__item">
              <img src={benefit} alt="преимущество" />

              <h4>Сертификаты соответствия</h4>
              <p>
                Продукция «Дебют» имеет Декларацию о соответствии требованиям
                Евразийкого Экономического союза
              </p>
            </div>
          </section>
          <div className="catalog-title">
            <h3>Каталог</h3>
          </div>
          <section className="catalog">
            <div className="catalog-item__wrap">
              {catalogCategories.map((category) => (
                <div key={category.label} className="catalog-item">
                  <div className="catalog-item__img-wrap">
                    <img
                      className="catalog-item__img"
                      src={category.image}
                      alt="п/п мешок"
                    />
                  </div>
                  <div className="catalog-btn__wrap">
                    <Link to={category.path}>
                      <button className="catalog-item__btn-price">
                        {category.label}
                      </button>
                    </Link>

                    {/* <button className="catalog-item__btn-shopping-cart">
                      <img
                        className="icon-trolley"
                        src={iconTrolleyCart}
                        alt="корзина"
                      />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="btn-all_wrap">
            <Link to={CATALOG_PATH}>
              <button className="btn-all">Все товары &rarr;</button>
            </Link>
          </div>
          <div className="partners-title">
            <h3>Наши партнёры</h3>
          </div>
          <section className="partners">
            <div className="partners-item">
              <img src={novopack} alt="Новопэк" />
            </div>
            <div className="partners-item">
              <img src={novopack} alt="Новопэк" />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
