import React from "react";
import "../styles/product.css";

export default function ProductPage() {
  return (
    <div>
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

      <section class="way">
        <p>Главная {">"} Каталог {">"} Товар</p>
      </section>
      <main>
        <div class="product-img"></div>
        <div class="product-about__wrap">
          <div class="product-about__title">Мешки пропиленовые 55*95</div>
          <div class="product-about__text">
            <p>
              Размер 55*95 см. Вес: 41 гр. Рассчитаны на 50 кг. Цвет: зелёный, 2
              сорт
            </p>
          </div>
          <div class="product__price-buy">
            <div class="product__price">9.00 р/шт</div>
            <div class="product__amount">
              <button class="amount__change">-</button>
              <input type="number" class="amount__cur"></input>
              <button class="amount__change">+</button>
            </div>
            <div>
              <button class="add-to-cart"> Добавить в корзину </button>{" "}
            </div>
          </div>
        </div>
      </main>

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
          <p><strong>г. Санкт-Петербург</strong>, ул. Минеральная, д. 31В, офис 20{" "}</p>
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
