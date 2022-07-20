import React from "react";
import "../styles/main.css";

export default function MainPage() {
  return (
    <div>
      <div class="container">
        <header>
          <div class="header__logo">
            <img src="./img/avg_logo.png" alt="AvegaBag лого" />
          </div>
          <div class="header__nav">
            <nav>
              <ul class="header__nav__ul">
                <li>О нас</li>
                <li>Каталог</li>
                <li>Прайс-лист</li>
                <li>Доставка</li>
              </ul>
            </nav>
          </div>
          <div class="header__shopping-cart">
            <img
              class="shopping-cart"
              src="./img/icon-trolley-cart-3683279.png"
              alt="Корзина"
            />
          </div>
        </header>
        <main>
          <section class="slider">
            <div class="slider-text">
              <h1>Промышленная упаковка для вашего бизнеса</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="btn__action">Заказать звонок</button>
            </div>
            <div class="slider-img"></div>
          </section>
          <section class="our-benefits">
            <div class="our-benefits__title">
              <h3>Наши преимущества</h3>
            </div>
            <div class="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />
              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />

              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="our-benefits__item">
              <img src="./img/benefit.png" alt="преимущество" />

              <h4>Lorem ipsum dolor</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </section>
          <section class="catalog">
            <div class="catalog-title">
              <h3>Каталог</h3>
            </div>
            <div class="catalog-item__wrap">
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug.png"
                  alt="мешок"
                />
                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">МЕШКИ</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug2.png"
                  alt="мешок"
                />
                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">МЕШКИ</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug3.png"
                  alt="перчатки"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">ПЕРЧАТКИ</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug4.png"
                  alt="мешок"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">176 р/шт</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug.png"
                  alt="мешок"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">176 р/шт</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug2.png"
                  alt="мешок"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">176 р/шт</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug4.png"
                  alt="мешок"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">176 р/шт</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
              <div class="catalog-item">
                <img
                  class="catalog-item__img"
                  src="./img/example-bug3.png"
                  alt="перчатки"
                />

                <div class="catalog-btn__wrap">
                  <button class="catalog-item__btn-price">176 р/шт</button>
                  <button class="catalog-item__btn-shopping-cart">
                    <img
                      class="icon-trolley"
                      src="./img/icon-trolley-cart-3683279.png"
                      alt="корзина"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="btn-all_wrap">
              <button class="btn-all">Все товары &rarr;</button>
            </div>
          </section>
          <section class="partners">
            <div class="partners-title">
              <h3>Наши партнёры</h3>
            </div>
            <div class="partners-item">
              <img src="./img/novopack.png" alt="Новопэк" />
            </div>
            <div class="partners-item">
              <img src="./img/novopack.png" alt="Новопэк" />
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div class="footer-logo">
          <img src="./img/avg_logo.png" alt="АвегаBag" />
          <p>Промышленная полимерная упаковка</p>
          <p>&copy; 2020-2022</p>
        </div>
        <div class="footer-nav">
          <ul>
            <li>О компании</li>
            <li>Оплата</li>
            <li>Доставка</li>
          </ul>
        </div>

        <div class="footer-call">
          <p>Нужна консультация? Оставьте свой номер, и мы c вами свяжемся:</p>
          <form action="#" method="post" class="phone_form">
            <div class="user_phone">
              <input
                type="text"
                placeholder="+7xxx-xxx-xx-xx"
                id="user_phone"
                class="rfield"
              />
            </div>

            <input type="submit" class="btn_submit" />
          </form>
        </div>
        <div class="footer-contacts">
          <p>
            Москва (499) 490-78-12 <br />
            avega.si@mail.ru
          </p>
          <br />
          <p>
            <strong>г. Санкт-Петербург</strong>, ул. Минеральная, д. 31В, офис
            20{" "}
          </p>
          <br />
          <p>
            г. <strong>Москва</strong>, м. Пражская, ул. Подольских Курсантов,
            д. 3, стр. 7А, СК "Мобиус Логистика"
          </p>
        </div>
      </footer>
    </div>
  );
}
