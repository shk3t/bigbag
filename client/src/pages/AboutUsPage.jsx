import React from "react";
import Way from "../components/Way";
import Footer from "../components/Footer";
import aboutUs from "../assets/aboutUs.jpg";

export default function AboutUsPage() {
  return (
    <div>
      <Way />
      <div className="slider about-us__wrap">
        {/* <div className="about-us__img"> */}
        <div className="slider-img">
          <img src={aboutUs} alt="Производство мешков"></img>
        </div>
        <div className="about-us__text">
          <h2>О компании</h2>
          <p>
            Компания «БигБэгПро» основана в 2017 году. Уже пять лет мы продаём
            качественную упаковку из полипропилена для российских предприятий. У
            нас вы можете заказать оптом{" "}
            <strong>
              строительные, бытовые, пищевые полипропиленовые мешки
            </strong>
            , а также <strong>мягкие контейнеры МКР(биг-бэги) </strong>разных
            модификаций и сопутствующие аксессуары.
          </p>
          <p>
            У каждого производства разные задачи. Мы индивидуально подходим к
            каждому клиенту, помогая найти оптимальную упаковку и обеспечить
            сохранность вашей продукции при хранении и транспортировке.
          </p>
          <p>
            Мы <a href="/delivery"> доставляем упаковку</a> по Москве и
            Московской области, а также по России и странам СНГ.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
