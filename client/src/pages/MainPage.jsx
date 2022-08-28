import React from "react";
import { Link } from "react-router-dom";

import { CATALOG_PATH } from "../consts";
import Footer from "../components/Footer";
import Header from "../components/Header";

import benefit from "../assets/benefit.png";
import iconTrolleyCart from "../assets/icon-trolley-cart-3683279.png";
import novopack from "../assets/novopack.png";
import exampleBug from "../assets/example-bug.png";
import main_img from "../assets/main_img.jpg";

import BtnRequestACall from "../components/UI/Buttons/BtnRequestACall";

export default function MainPage() {
  return (
    <div className="root-div">
      <Header />

      <div className="container">
        <main>
          <section className="slider">
            <div className="slider-text">
              <h1>«Авега» — промышленная упаковка для вашего бизнеса</h1>
              <p>
                Мы продаём качественную промышленную полимерную упаковку —
                строительные, бытовые, пищевые мешки, а также мягкие контейнеры
                (биг-бэги). Доставка по России и странам СНГ
              </p>
              {/* 22.08 заменить на Buttons -- BtnRequestACall */}
              {/* <button className="btn__action">Заказать звонок</button> */}
              <BtnRequestACall />
            </div>
            <div className="slider-img">
              <img src={main_img} alt="Биг-бэг в производстве" />
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
                Продукция «Авега» имеет Декларацию о соответствии требованиям
                Евразийкого Экономического союза
              </p>
            </div>
          </section>
          <div className="catalog-title">
            <h3>Каталог</h3>
          </div>
          <section className="catalog">
            <div className="catalog-item__wrap">
              {[...Array(10).keys()].map((key) => (
                <div key={key} className="catalog-item">
                  <div className="catalog-item__img-wrap">
                    <img
                      className="catalog-item__img"
                      src={exampleBug}
                      alt="мешок"
                    />
                  </div>
                  <div className="catalog-btn__wrap">
                    <button className="catalog-item__btn-price">МЕШКИ</button>
                    <button className="catalog-item__btn-shopping-cart">
                      <img
                        className="icon-trolley"
                        src={iconTrolleyCart}
                        alt="корзина"
                      />
                    </button>
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
