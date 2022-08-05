import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <div className="root-div">
      <Header />

      <div className="container">
        <main>
          <section className="slider">
            <div className="slider-text">
              <h1>Промышленная упаковка для вашего бизнеса</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn__action">Заказать звонок</button>
            </div>
            <div className="slider-img"></div>
          </section>
          <div className="our-benefits__title">
            <h3>Наши преимущества</h3>
          </div>
          <section className="our-benefits">
            <div className="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />

              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />

              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </section>
          <div className="catalog-title">
            <h3>Каталог</h3>
          </div>
          <section className="catalog">
            <div className="catalog-item__wrap">
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug.png"
                  alt="мешок"
                />
                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">МЕШКИ</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug2.png"
                  alt="мешок"
                />
                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">МЕШКИ</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug3.png"
                  alt="перчатки"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">ПЕРЧАТКИ</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug4.png"
                  alt="мешок"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">176 р/шт</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug.png"
                  alt="мешок"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">176 р/шт</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug2.png"
                  alt="мешок"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">176 р/шт</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug4.png"
                  alt="мешок"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">176 р/шт</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div className="catalog-item">
                <img
                  className="catalog-item__img"
                  src="./img/example-bug3.png"
                  alt="перчатки"
                />

                <div className="catalog-btn__wrap">
                  <button className="catalog-item__btn-price">176 р/шт</button>
                  <button className="catalog-item__btn-shopping-cart">
                    <img
                      className="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="btn-all_wrap">
            <button className="btn-all">Все товары &rarr;</button>
          </div>
          <div className="partners-title">
            <h3>Наши партнёры</h3>
          </div>
          <section className="partners">
            <div className="partners-item">
              <img src="./img/novopack.png" alt="Новопэк" />
            </div>
            <div className="partners-item">
              <img src="./img/novopack.png" alt="Новопэк" />
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
